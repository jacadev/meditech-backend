const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "doctor",
    {
      aboutMe: {
        field: "about_me",
        type: DataTypes.STRING,
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
