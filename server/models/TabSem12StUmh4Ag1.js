const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12StUmh4Ag1', {
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
    sem21Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Sem21_UU'
    },
    udUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD_UU'
    },
    uf21Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF21_UU'
    },
    uf201Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF201_UU'
    },
    sta21Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Sta21_UU'
    },
    um21Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM21_UU'
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
    tableName: 'TabSem1_2STUmh4_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
