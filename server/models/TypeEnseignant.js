const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TypeEnseignant', {
    refType: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: 'Réf_Type'
    },
    type: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'Type'
    },
    typeAr: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'Type_Ar'
    }
  }, {
    sequelize,
    tableName: 'TypeEnseignant',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TypeEnseignant$PrimaryKey",
        unique: true,
        fields: [
          { name: "Réf_Type" },
        ]
      },
      {
        name: "TypeEnseignant$Réf_Fonction",
        unique: true,
        fields: [
          { name: "Réf_Type" },
        ]
      },
    ]
  });
};
