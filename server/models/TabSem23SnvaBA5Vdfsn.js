const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23SnvaBA5Vdfsn', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
primaryKey: true,
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
    bCFLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'B_C_F_LS'
    },
    enzALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ENZ_A_LS'
    },
    uef15Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF15_LS'
    },
    imCLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'IM_C__LS'
    },
    reMeLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'RE_ME_LS'
    },
    uef25Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF25_LS'
    },
    tBLLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_B_L_LS'
    },
    tCVLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_C_V_LS'
    },
    tFLLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_F_L_LS'
    },
    uem15Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM15_LS'
    },
    cBPLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'C_B_P_LS'
    },
    inStLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'IN_ST_LS'
    },
    uem25Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM25_LS'
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
    tableName: 'TabSem2_3SNVA_B_A5_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
