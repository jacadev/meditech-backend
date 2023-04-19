const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "day",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            day: {
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