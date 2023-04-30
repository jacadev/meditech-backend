const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const models = require("./models");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

for (const model in models) models[model](sequelize);
for (key in sequelize.models) {
  sequelize.models[key.charAt(0).toUpperCase() + key.slice(1)] =
    sequelize.models[key];
  delete sequelize.models[key];
}

const {
  Doctor,
  Patient,
  Specialty,
  Doctor_specialty,
  Review,
  Person,
  Rol,
  Day,
  Timetable,
  Appointment,
  Disponibilty,
  Pay
} = sequelize.models;

// relación entre Doctor y Specialty
Doctor.belongsToMany(Specialty, {
  through: Doctor_specialty,
  onDelete: "CASCADE"
});

Specialty.belongsToMany(Doctor, {
  through: Doctor_specialty,
  onDelete: "CASCADE"
});

// relación entre Doctor y Person
Doctor.belongsTo(Person, {
  foreignKey: 'person_id',
  onDelete: "CASCADE"
});

Person.hasMany(Doctor, {
  foreignKey: 'person_id',
  onDelete: "CASCADE"
});

// relación entre Patient y Person
Patient.belongsTo(Person, {
  foreignKey: 'person_id',
  onDelete: "CASCADE"
})

Person.hasMany(Patient, {
  foreignKey: 'person_id',
  onDelete: "CASCADE"
});


// relación entre rol y person
Rol.hasMany(Person, {
  foreignKey: {
    name: "rol_id",
    allowNull: false,
  },
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE"
});

Person.belongsTo(Rol, {
  foreignKey: {
    name: "rol_id",
    allowNull: false,
  },
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE"
});

// relación entre paciente y review
Patient.hasMany(Review, {
  foreignKey: {
    name: "patient_id",
    allowNull: false,
  },
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE" // elimina las filas relacionadas en cascada
});

Review.belongsTo(Patient, {
  foreignKey: {
    name: "patient_id",
    allowNull: false,
  },
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE" // elimina las filas relacionadas en cascada
});

// relación entre review y doctor
Doctor.belongsToMany(Review, {
  through: "Doctor_Review",
  foreignKey: "doctor_id",
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE" // elimina las filas relacionadas en cascada
});

Review.belongsToMany(Doctor, {
  through: "Doctor_Review",
  foreignKey: "review_id",
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE" // elimina las filas relacionadas en cascada
});

// relación uno a muchos entre Day y Disponibilty
Day.hasMany(Disponibilty, {
  foreignKey: {
    name: 'day_id',
    allowNull: false,
  },
  onDelete: 'CASCADE', // elimina las filas relacionadas en cascada
});

Disponibilty.belongsTo(Day, {
  foreignKey: {
    name: 'day_id',
    allowNull: false,
  },
  onDelete: "CASCADE"
});

// relación uno a muchos entre Timetable y Disponibility
Timetable.hasMany(Disponibilty, {
  foreignKey: {
    name: 'timetable_id',
    allowNull: false,
  },
  onDelete: 'CASCADE', // elimina las filas relacionadas en cascada
});

Disponibilty.belongsTo(Timetable, {
  foreignKey: {
    name: 'timetable_id',
    allowNull: false,
  },
  onDelete: "CASCADE"
});

// relación entre Disponibility y Doctor
Doctor.hasMany(Disponibilty, {
  foreignKey: 'doctor_id',
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE" // elimina las filas relacionadas en cascada
});

Disponibilty.belongsTo(Doctor, {
  foreignKey: 'doctor_id',
  // onDelete: "RESTRICT", // no permite la eliminación de la fila principal si tiene filas relacionadas
  onDelete: "CASCADE" // elimina las filas relacionadas en cascada
});

// relación entre Appointment y Patient
Patient.hasMany(Appointment, {
  foreignKey: {
    name: "patient_id",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

Appointment.belongsTo(Patient, {
  foreignKey: {
    name: "patient_id",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

// Relación entre Appointment y Disponibility
Disponibilty.hasMany(Appointment, {
  foreignKey: {
    name: "disponibilty_id",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

Appointment.belongsTo(Disponibilty, {
  foreignKey: {
    name: "disponibilty_id",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

Appointment.belongsTo(Pay, {
  foreignKey: "pay_id",
  // onDelete: "CASCADE"
});

Pay.belongsTo(Appointment, {
  foreignKey: 'appointment_id'
})

module.exports = { ...sequelize.models, sequelize };
