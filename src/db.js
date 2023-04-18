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

const { Doctor, Patient, Specialty, Doctor_specialty, Review, Person, Rol } = sequelize.models;

Doctor.belongsToMany(Specialty, { through: Doctor_specialty });
Specialty.belongsToMany(Doctor, { through: Doctor_specialty });
Doctor.belongsTo(Person, { foreignKey: 'person_id' });
Patient.belongsTo(Person, { foreignKey: 'person_id' })

// relación entre rol y person
Rol.hasMany(Person, {
  foreignKey: {
    name: "rol_id",
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

Person.belongsTo(Rol, {
  foreignKey: {
    name: "rol_id",
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

// relación entre paciente y review
Patient.hasMany(Review, {
  foreignKey: {
    name: "patient_id",
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

Review.belongsTo(Patient, {
  foreignKey: {
    name: "patient_id",
    allowNull: false,
  },
  onDelete: "RESTRICT",
});

// relación entre review y doctor
Doctor.belongsToMany(Review, {
  through: "Doctor_Review",
  foreignKey: "doctor_id",
  onDelete: "RESTRICT",
});

Review.belongsToMany(Doctor, {
  through: "Doctor_Review",
  foreignKey: "review_id",
  onDelete: "RESTRICT",
});


// console.log('los modelos', sequelize.models);

module.exports = { ...sequelize.models, sequelize };
