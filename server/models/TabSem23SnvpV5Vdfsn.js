const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23SnvpV5Vdfsn', {
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
    bduSLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BduS_LA'
    },
    ued1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED1_LA'
    },
    bebLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BEB_LA'
    },
    pbaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PBA_LA'
    },
    pbvLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PBV_LA'
    },
    uef33La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF33_LA'
    },
    betILa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BetI_LA'
    },
    emcLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EMC_LA'
    },
    uem10La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM10_LA'
    },
    anscLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ANSC_LA'
    },
    gdesELa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GdesE_LA'
    },
    uet1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET1_LA'
    },
    mphLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MPH_LA'
    },
    pdePhLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PdePH_LA'
    },
    um11La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM11_LA'
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
    tableName: 'TabSem2_3SNVP_V5_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
