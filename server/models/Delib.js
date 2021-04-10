const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Delib', {
    au: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    spe: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dateSn1: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_sn1'
    },
    finalSn1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'final_sn1'
    },
    dateSr1: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_sr1'
    },
    finalSr1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'final_sr1'
    },
    dateSn2: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_sn2'
    },
    finalSn2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'final_sn2'
    },
    dateSr2: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_sr2'
    },
    finalSr2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'final_sr2'
    },
    dateAnn: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_ann'
    },
    finalAnn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'final_ann'
    },
    dateAnr: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_anr'
    },
    finalAnr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'final_anr'
    },
    modif: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsng: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsrg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsn2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsr2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsng2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    modifsrg2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'delib',
    schema: 'dbo',
    timestamps: false
  });
};
