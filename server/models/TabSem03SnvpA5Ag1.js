const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem03SnvpA5Ag1', {
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
    sagLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'SAG_LA'
    },
    uF2OLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_F2O_LA'
    },
    lcLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LC_LA'
    },
    mupaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MUPA_LA'
    },
    uediLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEDI_LA'
    },
    aRaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'A_RA_LA'
    },
    phReLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PH_RE_LA'
    },
    uefoLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEFO__LA'
    },
    pcfLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PCF_LA'
    },
    tpLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TP_LA'
    },
    uemeLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEME_LA'
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
    tableName: 'TabSem0_3SNVP_A5_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
