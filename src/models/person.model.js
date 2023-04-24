const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const Person = sequelize.define(
    "person",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      userName: {
        field: "user_name",
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },      
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM("Femenino", "Masculino"),
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },      
    },
    {
      timestamps: true,
      createdAt: "created_date",
      updatedAt: "updated_at",
    }
  );
  
  Person.beforeCreate(async (person, options) => {
    if (!person.password) {
      // Si el campo password es nulo, establece una contraseña predeterminada
      person.password = "password123";
    } else {
      // Si el campo password tiene un valor, hashea la contraseña antes de guardarla en la base de datos
      const hashedPassword = await bcrypt.hash(person.password, 10);
      person.password = hashedPassword;
    }
  });

  return Person;
};


