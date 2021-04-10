const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Commune', {
    codseq: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nomcommune: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nomcommunearab: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    codewilaya: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'commune',
    schema: 'dbo',
    timestamps: false
  });
};
