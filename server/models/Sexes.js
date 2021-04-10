const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sexes', {
    codeSexe: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      field: 'Code_Sexe'
    },
    sexe: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'Sexe'
    },
    sexeAr: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'Sexe_Ar'
    }
  }, {
    sequelize,
    tableName: 'Sexes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Sexes$Code_Sexe",
        fields: [
          { name: "Code_Sexe" },
        ]
      },
      {
        name: "Sexes$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code_Sexe" },
        ]
      },
    ]
  });
};
