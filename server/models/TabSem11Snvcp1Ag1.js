const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11Snvcp1Ag1', {
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
    agrenLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AGREN_LA'
    },
    ued1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED1__LA'
    },
    bioclLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Biocl_LA'
    },
    evAplLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EVApl_LA'
    },
    scSolLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ScSol_LA'
    },
    uef1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF1__LA'
    },
    phVgALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PhVgA_LA'
    },
    prdPlLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PrdPl_LA'
    },
    uef2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF2__LA'
    },
    coEaSLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CoEaS_LA'
    },
    eEnDdLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EEnDD_LA'
    },
    uem1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM1__LA'
    },
    commuLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'COMMU_LA'
    },
    uet1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET1__LA'
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
    tableName: 'TabSem1_1SNVCP1_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
