const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21SnvbioA1Vdfsn', {
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
    bVMMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'B_V_M_MS'
    },
    uD1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_D1__MS'
    },
    aPPMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'A_P_P_MS'
    },
    aPSMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'A_P_S_MS'
    },
    tBMMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_B_M_MS'
    },
    uF1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_F1__MS'
    },
    cMBMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'C_M_B_MS'
    },
    mEPMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_E_P_MS'
    },
    uM1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_M1__MS'
    },
    comMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'COM__MS'
    },
    uT1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_T1__MS'
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
    tableName: 'TabSem2_1SNVBIO_A1_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
