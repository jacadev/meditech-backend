// const { DataTypes } = require("sequelize");
// const bcrypt = require('bcrypt');

// module.exports = (sequelize) => {
//   sequelize.define(
//     "person",
//     {
//       id:{
//         type: DataTypes.INTEGER,
//         primaryKey:true,
//         autoIncrement: true
//       },
//       userName: {
//         field: "user_name",
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       firstName: {
//         field: "first_name",
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         field: "last_name",
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       phone: {
//         type: DataTypes.ARRAY(DataTypes.STRING),
//         allowNull: false,
//       },      
//       age: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       gender: {
//         type: DataTypes.ENUM("Femenino", "Masculino"),
//         allowNull: false,
//       },
//       status: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//       },      
//     },
//     {
//       timestamps: true,
//       createdAt: "created_date",
//       updatedAt: "updated_at",
//     }
//   );
// };

// Person.beforeCreate(async (person, options) => {
//   const hashedPassword = await bcrypt.hash(person.password, 10);
//   person.password = hashedPassword;
// });

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
        allowNull: false,
      },
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },      
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Femenino", "Masculino"),
        allowNull: false,
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
    const hashedPassword = await bcrypt.hash(person.password, 10);
    person.password = hashedPassword;
  });

  return Person;
};
