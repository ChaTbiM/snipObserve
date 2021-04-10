const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableEpmloiDuTemps', {
    jour: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'Jour'
    },
    refSection: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'Réf_Section'
    },
    refGroupe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'Réf_Groupe'
    },
    '0800C': {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: '08:00_C'
    },
    '0800S': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '08:00_S'
    },
    '0800E': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '08:00_E'
    },
    '0930C': {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: '09:30_C'
    },
    '0930S': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '09:30_S'
    },
    '0930E': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '09:30_E'
    },
    '1100C': {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: '11:00_C'
    },
    '1100S': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '11:00_S'
    },
    '1100E': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '11:00_E'
    },
    '1230C': {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: '12:30_C'
    },
    '1230S': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '12:30_S'
    },
    '1230E': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '12:30_E'
    },
    '1400C': {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: '14:00_C'
    },
    '1400S': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '14:00_S'
    },
    '1400E': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '14:00_E'
    },
    '1530C': {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: '15:30_C'
    },
    '1530S': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '15:30_S'
    },
    '1530E': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '15:30_E'
    },
    '0800F': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '08:00_F'
    },
    '0930F': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '09:30_F'
    },
    '1100F': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '11:00_F'
    },
    '1230F': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '12:30_F'
    },
    '1400F': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '14:00_F'
    },
    '1530F': {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: '15:30_F'
    },
    '0800L5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '08:00_L5'
    },
    '0930L5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '09:30_L5'
    },
    '1100L5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '11:00_L5'
    },
    '1230L5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '12:30_L5'
    },
    '1400L5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '14:00_L5'
    },
    '1530L5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '15:30_L5'
    },
    '0800L6': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '08:00_L6'
    },
    '0930L6': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '09:30_L6'
    },
    '1100L6': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '11:00_L6'
    },
    '1230L6': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '12:30_L6'
    },
    '1400L6': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '14:00_L6'
    },
    '1530L6': {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '15:30_L6'
    }
  }, {
    sequelize,
    tableName: 'Table_Epmloi_Du_Temps',
    schema: 'dbo',
    timestamps: false
  });
};
