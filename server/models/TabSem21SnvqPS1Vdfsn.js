const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21SnvqPS1Vdfsn', {
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
    coAmMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CO_AM_MS'
    },
    ud1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD1___MS'
    },
    mcspMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MCSP_MS'
    },
    tCMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_C_MS'
    },
    tPAMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_P_A_MS'
    },
    uf1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF1___MS'
    },
    angMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ANG___MS'
    },
    traSMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TRA_S_MS'
    },
    um1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM1___MS'
    },
    commMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'COMM__MS'
    },
    ut1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UT1___MS'
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
    tableName: 'TabSem2_1SNVQ_P_S1_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
