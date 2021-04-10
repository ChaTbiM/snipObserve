const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Snveve4Bio1', {
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
    botLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BOT___LS'
    },
    uf241Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF241_LS'
    },
    mEILs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_E_I_LS'
    },
    micrLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MICR__LS'
    },
    uf242Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF242_LS'
    },
    eGenLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'E_GEN_LS'
    },
    um241Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM241_LS'
    },
    statLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'STAT__LS'
    },
    um242Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM242_LS'
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
    tableName: 'TabSem1_2SNVEVE4_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
