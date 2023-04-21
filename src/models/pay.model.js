const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pay",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createTime: {
        field: "create_time",
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailAddress: {
        field: "email_address",
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      givenName: {
        field: "given_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currencyCode: {
        field: "currency_code",
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
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
