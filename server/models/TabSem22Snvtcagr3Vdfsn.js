const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22Snvtcagr3Vdfsn', {
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
    fa211La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'FA211_LA'
    },
    fa212La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'FA212_LA'
    },
    fa213La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'FA213_LA'
    },
    af211La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AF211_LA'
    },
    fa221La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'FA221_LA'
    },
    fa222La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'FA222_LA'
    },
    af212La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AF212_LA'
    },
    ma211La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MA211_LA'
    },
    am21La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AM21_LA'
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
    tableName: 'TabSem2_2SNVTCAGR3_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
