const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23SnvpA6Vdfsn', {
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
    gELa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'G_E__LA'
    },
    mRDLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_R_D_LA'
    },
    ued20La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED20_LA'
    },
    bHPLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'B_H_P_LA'
    },
    uef2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_2_LA'
    },
    elRuLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EL_RU_LA'
    },
    pElLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'P_EL_LA'
    },
    uef20La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF20_LA'
    },
    bALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'B_A__LA'
    },
    uem1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM_1_LA'
    },
    stInLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ST_IN_LA'
    },
    uem2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM_2_LA'
    },
    stLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'st_LA'
    },
    uetLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET___LA'
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
    tableName: 'TabSem2_3SNVP_A6_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
