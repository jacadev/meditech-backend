const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "appointment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      consultationCost: {
        field: "consultation_cost",
        type: DataTypes.STRING,
        defaultValue: "El paciente no suministro información",
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
      updatedAt: "updated_date",
    }
  );
};
