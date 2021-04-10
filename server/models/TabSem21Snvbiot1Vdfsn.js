const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21Snvbiot1Vdfsn', {
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
    geBMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GE_B__MS'
    },
    phMiMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PH_MI_MS'
    },
    plGMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Pl_G__MS'
    },
    uef01Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF01_MS'
    },
    eMIMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'E_M_I_MS'
    },
    inMiMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'IN_MI_MS'
    },
    uef02Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF02_MS'
    },
    agAMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AG_A__MS'
    },
    mPrMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_PR__MS'
    },
    uem01Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM01_MS'
    },
    cMRMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'C_M_R_MS'
    },
    uet01Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET01_MS'
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
    tableName: 'TabSem2_1SNVBIOT1_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
