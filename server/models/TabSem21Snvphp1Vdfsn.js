const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21Snvphp1Vdfsn', {
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
    angLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Ang_LA'
    },
    uEd1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_ED1_LA'
    },
    chimiLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Chimi_LA'
    },
    gestLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Gest_LA'
    },
    uEf2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EF2_LA'
    },
    biopLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Biop_LA'
    },
    inforLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Infor_LA'
    },
    uEm1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EM1_LA'
    },
    commLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Comm_LA'
    },
    uEt2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_ET2_LA'
    },
    bochiLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Bochi_LA'
    },
    pestLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Pest_LA'
    },
    ueF1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_F1_LA'
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
    tableName: 'TabSem2_1SNVPHP1_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
