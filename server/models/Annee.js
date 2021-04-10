const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Annee', {
    anneeEnLettre: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'AnnéeEnLettre'
    },
    anneeEnChiffre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: 'AnnéeEnChiffre'
    },
    anneeEnLettreAr: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'AnnéeEnLettreAr'
    }
  }, {
    sequelize,
    tableName: 'Année',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Année$PrimaryKey",
        unique: true,
        fields: [
          { name: "AnnéeEnChiffre" },
        ]
      },
    ]
  });
};
