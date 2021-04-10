const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UniteEnseig', {
    codeUe: {
      type: DataTypes.STRING(55),
      allowNull: false,
      primaryKey: true,
      field: 'Code_UE'
    },
    ue: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'UE'
    },
    coef: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "1",
      field: 'Coef'
    },
    annee: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "on ajoute le semestre uniqueme",
      field: 'Année'
    },
    anneeEtude: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'AnnéeEtude'
    },
    cycleEtude: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CycleEtude'
    },
    filiereEtude: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'FilièreEtude'
    },
    semestre: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    credit: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    typeUe: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Fondamentale, découverte,trans",
      field: 'type_UE'
    },
    pwUe: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "lmd",
      field: 'PwUE'
    },
    tet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nature: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Unite_Enseig',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Unite_Enseig$AnnéeCycleUnite_Enseig",
        fields: [
          { name: "CycleEtude" },
        ]
      },
      {
        name: "Unite_Enseig$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code_UE" },
        ]
      },
    ]
  });
};
