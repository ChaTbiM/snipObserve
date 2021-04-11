const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23Stuga5Ag1', {
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
    geoHiUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GéoHi_UU'
    },
    sedimUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Sédim_UU'
    },
    uefGUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_G_UU'
    },
    geodyUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Géody_UU'
    },
    tetoUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Teto_UU'
    },
    uef3GUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF3G_UU'
    },
    geophUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Géoph_UU'
    },
    uemGUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM_G_UU'
    },
    sigUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'SIG_UU'
    },
    uem3GUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM3G_UU'
    },
    infStUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'InfSt_UU'
    },
    uetGUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET_G_UU'
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
    tableName: 'TabSem2_3STUGA5_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
