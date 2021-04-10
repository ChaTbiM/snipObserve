const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Historique', {
    nIns: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'N°Ins'
    },
    annee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'Année'
    },
    anneeUniv: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'AnnéeUniv'
    },
    refCours: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'Réf_Cours'
    },
    cours: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Cours'
    },
    coef: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Coef'
    },
    moyModule: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Moy_Module'
    },
    moyGle: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Moy_Gle'
    },
    observation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Observation'
    },
    universiteOrigine: {
      type: DataTypes.STRING(80),
      allowNull: true,
      comment: "Uniquement pour les étudiants ",
      field: 'Université_Origine'
    },
    faculteOrigine: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Faculté_Origine'
    },
    departementOrigine: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Département_Origine'
    },
    cycleOrigine: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'Cycle_Origine'
    },
    filliereOrigine: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Fillière_Origine'
    },
    creditMatiere: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_matière'
    },
    codeUe: {
      type: DataTypes.STRING(55),
      allowNull: false,
      field: 'Code_UE'
    },
    creditUe: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_UE'
    },
    aquit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'Aquit'
    },
    anDObtent: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_d_obtent'
    },
    faculteOrigineAr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Faculté_OrigineAr'
    },
    departementOrigineAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Département_OrigineAr'
    },
    filliereOrigineAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Fillière_OrigineAr'
    },
    universiteOrigineAr: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Université_OrigineAr'
    },
    cycleOrigineAr: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "désignations Arabe",
      field: 'Cycle_OrigineAr'
    },
    specialiteOrigine: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'specialité_origine'
    },
    specialiteOrigineAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'specialité_origine_ar'
    },
    aq: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Historique',
    schema: 'dbo',
    timestamps: false
  });
};
