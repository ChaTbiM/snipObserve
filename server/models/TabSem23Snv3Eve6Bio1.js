const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23Snv3Eve6Bio1', {
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
    drEnLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Dr_En_LS'
    },
    uD16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_D16_LS'
    },
    bioCLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Bio_C_LS'
    },
    bioPLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Bio_P_LS'
    },
    biogeLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOGE_LS'
    },
    coDeLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Co_Dé_LS'
    },
    uF16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_F16_LS'
    },
    cartLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Cart_LS'
    },
    meEtLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Mé_Et_LS'
    },
    uM16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_M16_LS'
    },
    iniRLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Ini_R_LS'
    },
    uT16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_T16_LS'
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
    tableName: 'TabSem2_3SNV3EVE6_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
