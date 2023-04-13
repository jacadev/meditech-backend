const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "doctor_specialty",
    {
      doctorId: {
        field: "doctor_id",
        type: DataTypes.STRING,
        allowNull: false,
      },
      specialtyId: {
        field: "specialty_id",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
