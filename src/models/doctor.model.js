const { DataTypes } = require("sequelize");
// const Person = require('./person.model');

module.exports = (sequelize) => {
  sequelize.define(
    "doctor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      aboutMe: {
        field: "about_me",
        type: DataTypes.TEXT,
        allowNull: false,
      },
      profileImage: {
        field: "profile_image",
        type: DataTypes.STRING,
        allowNull: false,
      },
      tuitionCode: {
        field: "tuition_code",
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultationCost: {
        field: "consultation_cost",
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      location: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      diseasesTreated: {
        field: "diseases_treated",
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      }
    },
    {
      timestamps: true,
      createdAt: "created_date",
      updatedAt: "updated_at",
    }
  );
};
