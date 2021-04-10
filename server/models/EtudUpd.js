const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EtudUpd', {
    rowid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nIns: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'N°Ins'
    },
    au: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    dateMod: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      field: 'date_mod'
    },
    us: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    refCours: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'Réf_Cours'
    },
    oldExamen: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_examen'
    },
    oldRattrapage: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_rattrapage'
    },
    oldConference: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_Conference'
    },
    oldSeminaire: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_seminaire'
    },
    oldTd: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_TD'
    },
    oldTp: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_TP'
    },
    oldStage: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_stage'
    },
    oldProjet: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_Projet'
    },
    oldAutreCtl: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'old_autre_Ctl'
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
    }
  }, {
    sequelize,
    tableName: 'etud_upd',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_rowid2",
        unique: true,
        fields: [
          { name: "rowid" },
        ]
      },
    ]
  });
};
