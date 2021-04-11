const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Snvbiot3Bio2', {
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
    m1GvMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:GV_MS'
    },
    m2HsMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:HS_MS'
    },
    m3AaMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M3:AA_MS'
    },
    uef1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF1__MS'
    },
    m1TsMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:TS_MS'
    },
    m2InMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2;IN_MS'
    },
    uem1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM1__MS'
    },
    mCgeMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M:CGE_MS'
    },
    uet1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET1__MS'
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
    tableName: 'TabSem1_2SNVBIOT3_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
