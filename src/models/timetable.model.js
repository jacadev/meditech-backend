const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "timetable",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            startTime: {
                field: "start_time",
                type: DataTypes.TIME,
                allowNull: false,
            },
            endTime: {
                field: "end_time",
                type: DataTypes.TIME,
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