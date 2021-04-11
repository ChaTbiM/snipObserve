const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11Snvbiot2Vdfsn', {
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
    micPMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MIC_P_MS'
    },
    vigSMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'VIG_S_MS'
    },
    uef2Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF2__MS'
    },
    micAMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MIC_A_MS'
    },
    phToMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PH_TO_MS'
    },
    uem02Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM02_MS'
    },
    anScMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AN_SC_MS'
    },
    leReMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LE_RE_MS'
    },
    uet02Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET02_MS'
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
    tableName: 'TabSem1_1SNVBIOT2_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
