const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11Stugeo2Ag1', {
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
    dg21Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'DG21_UU'
    },
    udg21Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG21_UU'
    },
    udg01Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG01_UU'
    },
    udg02Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG02_UU'
    },
    udg03Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG03_UU'
    },
    udg04Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG04_UU'
    },
    udg22Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG22_UU'
    },
    udg3Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG3_UU'
    },
    udg23Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG23_UU'
    },
    udg41Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG41_UU'
    },
    udg42Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG42_UU'
    },
    udg24Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG24_UU'
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
    tableName: 'TabSem1_1STUGEO2_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
