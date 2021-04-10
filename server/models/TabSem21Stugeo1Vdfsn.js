const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21Stugeo1Vdfsn', {
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
    dg111Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'DG111_UU'
    },
    udg11Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UDG11_UU'
    },
    ufg11Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFG11_UU'
    },
    ufg01Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFG01_UU'
    },
    mg111Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MG111_UU'
    },
    mg112Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MG112_UU'
    },
    mg113Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MG113_UU'
    },
    mg114Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MG114_UU'
    },
    umg11Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UMG11_UU'
    },
    tg111Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TG111_UU'
    },
    tg112Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TG112_UU'
    },
    utg11Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UTG11_UU'
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
    tableName: 'TabSem2_1STUGEO1_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
