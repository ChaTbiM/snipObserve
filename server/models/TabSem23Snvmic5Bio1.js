const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23Snvmic5Bio1', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      field: 'NUM'
    },
    ins: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'INS'
    },
    nom: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'NOM'
    },
    noma: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'NOMA'
    },
    ains: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'AINS'
    },
    etat: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'Etat'
    },
    mycALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Myc_A_LS'
    },
    sysPLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Sys_P_LS'
    },
    uef51Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF51_LS'
    },
    biMoLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BI_MO_LS'
    },
    bioMLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIO_M_LS'
    },
    geMiLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GE_MI_LS'
    },
    uef52Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF52_LS'
    },
    mQSLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_Q_S_LS'
    },
    phaTLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PHA_T_LS'
    },
    tCMLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_C_M_LS'
    },
    uem51Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM51_LS'
    },
    moy: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MOY'
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'CREDIT'
    },
    ses: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'SES'
    },
    res: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'RES'
    }
  }, {
    sequelize,
    tableName: 'TabSem2_3SNVMIC_5_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
