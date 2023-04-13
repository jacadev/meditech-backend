const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'review',
    {
      comment: {        
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },      
    }, {
      timestamps: true,
      createdAt: "comment_date",
      updatedAt: false,
    },
  );
};