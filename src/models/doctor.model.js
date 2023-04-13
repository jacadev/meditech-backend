const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "doctor",
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
      phone: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      diseasesTreated: {
        field: "diseases_treated",
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isAdmin: {
        field: "is_admin",
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_date",
      updatedAt: "updated_at",
    }
  );
};
