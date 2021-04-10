const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fonctions', {
    refFonction: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: 'Réf_Fonction'
    },
    fonction: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Fonction'
    },
    fonctionAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Fonction_Ar'
    }
  }, {
    sequelize,
    tableName: 'Fonctions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Fonctions$FonctionsRéf_Fonction",
        fields: [
          { name: "Réf_Fonction" },
        ]
      },
      {
        name: "Fonctions$PrimaryKey",
        unique: true,
        fields: [
          { name: "Réf_Fonction" },
        ]
      },
    ]
  });
};
