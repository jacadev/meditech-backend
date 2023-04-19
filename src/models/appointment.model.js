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
      date: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      consultationReason: {
        field: "consultation_reason",
        type: DataTypes.TEXT,
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
