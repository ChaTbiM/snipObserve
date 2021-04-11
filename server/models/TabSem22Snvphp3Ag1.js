const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22Snvphp3Ag1', {
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
    ued: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED'
    },
    ueD: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_D'
    },
    uet: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET'
    },
    ueT: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_T'
    },
    uEf1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EF1'
    },
    ueF1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_F1'
    },
    ueFf1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_FF1'
    },
    ueF2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_f2'
    },
    uF2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_F2'
    },
    ueFf2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_FF2'
    },
    uEm: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EM'
    },
    uem1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM1'
    },
    ueM: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_M'
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
    tableName: 'TabSem2_2SNVPHP3_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
