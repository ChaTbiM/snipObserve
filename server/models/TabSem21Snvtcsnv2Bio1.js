const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21Snvtcsnv2Bio1', {
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
    f211Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F211_LS'
    },
    f212Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F212_LS'
    },
    f213Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F213_LS'
    },
    uef21Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF21_LS'
    },
    m211Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M211_LS'
    },
    m212Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M212_LS'
    },
    uem21Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM21_LS'
    },
    t211Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T211_LS'
    },
    uet21Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET21_LS'
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
    tableName: 'TabSem2_1SNVTCSNV2_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
