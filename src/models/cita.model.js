const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "cita",
        {
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
            dni: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            hour: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            dataTreatment: {
                field: "data_treatment",
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            receiveCommunication: {
                field: "receive_communication",
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            timestamps: true,
            createdAt: "created_date",
            updatedAt: "updated_at",
        }
    );
};
