const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21Snvpna2Vdfsn', {
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
    legisLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Légis_LA'
    },
    metReLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MétRe_LA'
    },
    uaTs2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UATs2_LA'
    },
    apaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'APA_LA'
    },
    ueDs2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEDs2_LA'
    },
    adbLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ADB_LA'
    },
    hygPrLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'HygPr_LA'
    },
    pnaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PNA_LA'
    },
    uef2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_2_LA'
    },
    ameGnLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AmeGn_LA'
    },
    reproLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Repro_LA'
    },
    ueFs2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEFs2_LA'
    },
    gesPrLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GesPr_LA'
    },
    toxAlLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ToxAl_LA'
    },
    ueMs2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEMs2_LA'
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
    tableName: 'TabSem2_1SNVPNA2_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
