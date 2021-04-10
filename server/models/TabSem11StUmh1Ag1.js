const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11StUmh1Ag1', {
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
    technUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Techn_UU'
    },
    tele1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Téle1_UU'
    },
    ued1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED1_UU'
    },
    chimiUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Chimi_UU'
    },
    hydfUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'hydf_UU'
    },
    uef1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF1_UU'
    },
    cospUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Cosp_UU'
    },
    hyd1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Hyd1__UU'
    },
    uef2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF2_UU'
    },
    infoaUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Infoa_UU'
    },
    mathsUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Maths_UU'
    },
    uem1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM1_UU'
    },
    geolUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Géol_UU'
    },
    uem2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM2_UU'
    },
    ang2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ANG2_UU'
    },
    uet1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET_1_UU'
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
    tableName: 'TabSem1_1STUmh1_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
