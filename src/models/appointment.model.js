const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "appointment",
    {      
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      createdAt: "created_date",
      updatedAt: false,
    }
  );
};
