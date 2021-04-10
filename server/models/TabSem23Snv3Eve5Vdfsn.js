const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23Snv3Eve5Vdfsn', {
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
    bioclLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOCL_LS'
    },
    ecopeLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ECOPE_LS'
    },
    geomLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GEOM_LS'
    },
    unF1Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UN_F1_LS'
    },
    anPrLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AN_PR_LS'
    },
    pollLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'POLL_LS'
    },
    unF2Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UN_F2_LS'
    },
    mEPLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_E_P_LS'
    },
    statLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'STAT__LS'
    },
    unMeLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UN_ME_LS'
    },
    ecoVLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ECO_V_LS'
    },
    unTrLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UN_TR_LS'
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
    tableName: 'TabSem2_3SNV3EVE5_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
