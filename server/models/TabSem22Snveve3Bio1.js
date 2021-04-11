const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22Snveve3Bio1', {
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
    biophLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOPH_LS'
    },
    ud231Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD231_LS'
    },
    zooFLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ZOO_F_LS'
    },
    uf231Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF231_LS'
    },
    enDLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EN_D_LS'
    },
    genLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GEN__LS'
    },
    uf232Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF232_LS'
    },
    techLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TECH__LS'
    },
    um231Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM231_LS'
    },
    methLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'METH_LS'
    },
    um232Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM232_LS'
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
    tableName: 'TabSem2_2SNVEVE3_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
