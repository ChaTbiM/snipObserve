const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem13SnvtPV6Vdfsn', {
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
    statALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'StatA_LA'
    },
    ued32La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED32_LA'
    },
    culMaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CulMa_LA'
    },
    cuPerLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CuPér_LA'
    },
    grCulLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GrCul_LA'
    },
    uef32La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF32_LA'
    },
    bioVLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BioV_LA'
    },
    inOgeLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'InOGE_LA'
    },
    uem32La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM32_LA'
    },
    anPrLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AnPr_LA'
    },
    stPraLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'StPra_LA'
    },
    uem33La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM33_LA'
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
    tableName: 'TabSem1_3SNVT_P_V6_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
