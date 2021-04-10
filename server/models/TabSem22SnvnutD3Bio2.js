const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22SnvnutD3Bio2', {
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
    mRhcMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M:RHC_MS'
    },
    uedcMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEDC__MS'
    },
    mDgpMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M:DGP_MS'
    },
    uef1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_1_MS'
    },
    m1CaMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:CA_MS'
    },
    m2QnMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:QN_MS'
    },
    uefoMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEFO__MS'
    },
    m1OiMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:OI_MS'
    },
    m2VaMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:VA_MS'
    },
    uemtMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEMT__MS'
    },
    mIceMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M:ICE_MS'
    },
    uetrMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UETR__MS'
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
    tableName: 'TabSem2_2SNVNUT_D3_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
