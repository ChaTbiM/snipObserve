const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23SnvtPV5Ag1', {
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
    letCLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LetC_LA'
    },
    spLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'SP_LA'
    },
    ueaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEA_LA'
    },
    apfLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'APF_LA'
    },
    iRetDLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'IRetD_LA'
    },
    uef3La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF3_LA'
    },
    pdvLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PDV_LA'
    },
    uem1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM1_LA'
    },
    agpLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AGP_LA'
    },
    ppsLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PPS_LA'
    },
    uf4La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF4_LA'
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
    tableName: 'TabSem2_3SNVT_P_V5_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
