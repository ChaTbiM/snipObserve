const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22SnvqPS3Vdfsn', {
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
    m1GdMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:GD_MS'
    },
    m2CgMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:CG_MS'
    },
    m3TaMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M3:TA_MS'
    },
    uefo1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEFO1_MS'
    },
    m1PrMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:PR_MS'
    },
    m2AcMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:AC_MS'
    },
    uemt1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEMT1_MS'
    },
    m1EnMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M1:EN_MS'
    },
    m2IfMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M2:IF_MS'
    },
    uetr1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UETR1_MS'
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
    tableName: 'TabSem2_2SNVQ_P_S3_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
