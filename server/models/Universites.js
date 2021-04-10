const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Universites', {
    codeUniversite: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      field: 'Code_université'
    },
    codeWilaya: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'Code_wilaya'
    },
    universite: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Université'
    },
    anneeScolaire: {
      type: DataTypes.STRING(9),
      allowNull: true,
      field: 'Année_scolaire'
    },
    controle1: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Contrôle1'
    },
    controle2: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'Contrôle2'
    },
    univ: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'Univ'
    },
    nbinscrit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    universiteAr: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'UniversitéAr'
    }
  }, {
    sequelize,
    tableName: 'Universités',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Universités$code_wilaya",
        fields: [
          { name: "Code_wilaya" },
        ]
      },
      {
        name: "Universités$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code_université" },
        ]
      },
      {
        name: "Universités$Université",
        fields: [
          { name: "UniversitéAr" },
        ]
      },
      {
        name: "Universités$UniversitésUniversité",
        fields: [
          { name: "Université" },
        ]
      },
    ]
  });
};
