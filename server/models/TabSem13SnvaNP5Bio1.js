const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem13SnvaNP5Bio1', {
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
    pGFLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'P_G_F_LS'
    },
    phDiLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PH_DI_LS'
    },
    f15Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F15_LS'
    },
    bARLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'B_A_R_LS'
    },
    dCALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'D_C_A_LS'
    },
    nutPLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Nut_P_LS'
    },
    f25Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F25_LS'
    },
    bAliLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'B_ALI_LS'
    },
    tecILs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TEC_I_LS'
    },
    m15Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M15_LS'
    },
    tTALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_T_A_LS'
    },
    m25Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M25_LS'
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
    tableName: 'TabSem1_3SNVA_N_P5_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
