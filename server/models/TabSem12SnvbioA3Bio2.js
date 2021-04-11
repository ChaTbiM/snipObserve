const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12SnvbioA3Bio2', {
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
    mMplMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M:MPL_MS'
    },
    uedMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED__MS'
    },
    m1GiMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:GI_MS'
    },
    m2OeMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:OE_MS'
    },
    m3MbMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M3:MB_MS'
    },
    uefMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF__MS'
    },
    mVgeMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M:VGE_MS'
    },
    uemMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM__MS'
    },
    mAseMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M:ASE_MS'
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
    tableName: 'TabSem1_2SNVBIO_A3_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
