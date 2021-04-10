const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Resultats', {
    nIns: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'N°Ins'
    },
    refCours: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'Réf_Cours'
    },
    examen: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    rattrapage: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    conference: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Conference'
    },
    seminaire: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    td: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TD'
    },
    tp: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TP'
    },
    stage: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    projet: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Projet'
    },
    autreCtl: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'autre_Ctl'
    },
    moyCc: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      comment: "Ce champs contient le crédit d",
      field: 'Moy_CC'
    },
    moyModule: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_Module'
    },
    aquit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Aquit'
    },
    option: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'Option'
    },
    ratt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "si ratt > exam, ce champs est "
    },
    excluMatiere: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'exclu_matière'
    },
    moyS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'moy_S1'
    },
    moyS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'moy_S2'
    },
    act: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rowid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    anDObtent: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_d_obtent'
    },
    creditMatiere: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'credit_matière'
    }
  }, {
    sequelize,
    tableName: 'Résultats',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_rowid",
        unique: true,
        fields: [
          { name: "rowid" },
        ]
      },
    ]
  });
};
