const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ResultatsUe', {
    nIns: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'N°Ins'
    },
    codeUe: {
      type: DataTypes.STRING(55),
      allowNull: false,
      field: 'Code_UE'
    },
    creditObtenu: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_obtenu'
    },
    moyUe: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Moy_UE'
    },
    aquit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'Aquit'
    },
    excluUe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'exclu_ue'
    },
    anDObtentUe: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_d_obtent_UE'
    }
  }, {
    sequelize,
    tableName: 'Resultats_UE',
    schema: 'dbo',
    timestamps: false
  });
};
