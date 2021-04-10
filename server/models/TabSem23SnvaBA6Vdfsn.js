const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23SnvaBA6Vdfsn', {
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
    bioMLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Bio_M_LS'
    },
    genGLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Gén_G_LS'
    },
    uef16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF16_LS'
    },
    chiBLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Chi_B_LS'
    },
    mEQLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_E_Q_LS'
    },
    toxALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Tox_A_LS'
    },
    uem16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM16_LS'
    },
    bSMLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'B_S_M_LS'
    },
    mTALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_T_A_LS'
    },
    tecCLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Tec_C_LS'
    },
    uem26Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM26_LS'
    },
    staPLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'STA_P_LS'
    },
    uet16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET16_LS'
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
    tableName: 'TabSem2_3SNVA_B_A6_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
