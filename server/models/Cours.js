const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cours', {
    refCours: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      field: 'Réf_Cours'
    },
    cours: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'Cours'
    },
    coef: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "1",
      field: 'Coef'
    },
    vExm: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VExm'
    },
    vRttrpg: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VRttrpg'
    },
    td: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
      field: 'TD'
    },
    vtd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VTD'
    },
    tp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
      field: 'TP'
    },
    vtp: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VTP'
    },
    seminaire: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
      field: 'Seminaire'
    },
    vSem: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VSem'
    },
    conference: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
      field: 'Conférence'
    },
    vConf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VConf'
    },
    stage: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
      field: 'Stage'
    },
    vStg: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VStg'
    },
    projet: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
      field: 'Projet'
    },
    vPrj: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VPrj'
    },
    autreCtl: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
      field: 'Autre_CTL'
    },
    vctl: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'VCTL'
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
    nbreemd: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 2,
      comment: "Nbre de control Td + Tp + conf",
      field: 'Nbreemd'
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
    coefExam: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    coefCc: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0,
      field: 'coefCC'
    },
    codeUe: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'codeUE'
    },
    obligatoire: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'Obligatoire'
    },
    pwCours: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "lmd",
      field: 'PwCours'
    },
    matSaisie: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'MatSaisie'
    },
    requise: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    modeCalculRat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      field: 'mode_calcul_rat'
    },
    ens: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Cours',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Cours",
        unique: true,
        fields: [
          { name: "Réf_Cours" },
        ]
      },
    ]
  });
};
