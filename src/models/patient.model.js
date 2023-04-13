const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "patient",
    {
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
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Femenino", "Masculino"),
        allowNull: false,
      },
      consultationReason: {
        field: "consultation_reason",
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
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
};
