const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11Snvcp2Ag1', {
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
    agBioLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AgBio_LA'
    },
    uedCLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED_C_LA'
    },
    avGenLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AVGén_LA'
    },
    cvVigLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CVVig_LA'
    },
    uefCLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_C_LA'
    },
    bioAgLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BioAg_LA'
    },
    mlhApLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MlhAp_LA'
    },
    nuMenLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'NuMén_LA'
    },
    uef2CLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF2C_LA'
    },
    irrDrLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'IrrDr_LA'
    },
    lrEnvLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LREnv_LA'
    },
    uemCLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM_C_LA'
    },
    angStLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AngSt_LA'
    },
    legAgLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LégAg_LA'
    },
    uetCLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET_C_LA'
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
    tableName: 'TabSem1_1SNVCP2_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
