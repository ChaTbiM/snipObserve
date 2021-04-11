const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Snvtcsb4Vdfsn', {
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
    botLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BOT__LS'
    },
    uf14Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF14_LS'
    },
    immLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'IMM__LS'
    },
    micLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MIC__LS'
    },
    uf24Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF24_LS'
    },
    ecoGLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ECO_G_LS'
    },
    um14Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM14__LS'
    },
    bioSLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIO_S_LS'
    },
    um24Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM24__LS'
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
    tableName: 'TabSem1_2SNVTCSB4_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
