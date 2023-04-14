const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'rol',
    {
      id: {        
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nameRol: {
        field: "name_rol",
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },      
    }, {
      timestamps: true,
      createdAt: "create_date",
      updatedAt: false,
    },
  );
};