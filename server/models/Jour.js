const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Jour', {
    jour: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Jour'
    },
    ref: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'Réf'
    },
    jourAr: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Jour_Ar'
    }
  }, {
    sequelize,
    tableName: 'Jour',
    schema: 'dbo',
    timestamps: false
  });
};
