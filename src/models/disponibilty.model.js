const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "disponibilty",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            date: {
                type: DataTypes.DATEONLY,
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