const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11SnvbioA2Bio2', {
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
    abmiMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ABMI_MS'
    },
    eibMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EIB_MS'
    },
    tbebMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TBEB_MS'
    },
    uefMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF__MS'
    },
    gqarMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GQAR_MS'
    },
    phToxMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PhTox_MS'
    },
    uemMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM__MS'
    },
    legisMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Légis_MS'
    },
    uetMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET__MS'
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
    tableName: 'TabSem1_1SNVBIO_A2_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
