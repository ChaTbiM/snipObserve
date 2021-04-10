const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22Snvtcagr4Ag1', {
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
    ud221La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD221_LA'
    },
    ud22La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD22_LA'
    },
    uf220La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF220_LA'
    },
    uf221La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF221_LA'
    },
    uf2281La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF2281_LA'
    },
    uf222La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF222_LA'
    },
    uf223La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF223_LA'
    },
    uf2822La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF2822_LA'
    },
    um221La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM221_LA'
    },
    um22La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM22_LA'
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
    tableName: 'TabSem2_2SNVTCAGR4_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
