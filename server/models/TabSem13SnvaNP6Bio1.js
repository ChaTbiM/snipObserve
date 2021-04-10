const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem13SnvaNP6Bio1', {
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
    gQALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'G_Q_A_LS'
    },
    tSMLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_S_M_LS'
    },
    uf16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF16_LS'
    },
    mATLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_A_T_LS'
    },
    m2BLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:B__LS'
    },
    uf26Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF26_LS'
    },
    m1AnLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:AN_LS'
    },
    m2InLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:IN_LS'
    },
    m3InLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M3:IN_LS'
    },
    um16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM16_LS'
    },
    projLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Proj__LS'
    },
    ut16Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UT16_LS'
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
    tableName: 'TabSem1_3SNVA_N_P6_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
