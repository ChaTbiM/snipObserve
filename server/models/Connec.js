const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Connec', {
    nomUtil: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nom_util'
    },
    nomUser: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nom_user'
    },
    dateAff: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_aff'
    },
    dateFin: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_fin'
    }
  }, {
    sequelize,
    tableName: 'connec',
    schema: 'dbo',
    timestamps: false
  });
};
