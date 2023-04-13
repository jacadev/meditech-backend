const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "specialty",
    {      
      specialty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};