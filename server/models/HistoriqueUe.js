const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HistoriqueUe', {
    nIns: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'N°Ins'
    },
    annee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'Année'
    },
    codeUe: {
      type: DataTypes.STRING(55),
      allowNull: false,
      field: 'Code_UE'
    },
    ue: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'UE'
    },
    coefUe: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Coef_UE'
    },
    creditUe: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_UE'
    },
    anneEtude: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'AnnéEtude'
    },
    typeUe: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'type_UE'
    },
    moyUe: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Moy_UE'
    },
    creditObtenue: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_obtenue'
    },
    aquit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'Aquit'
    },
    anDObtentUe: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_d_obtent_UE'
    }
  }, {
    sequelize,
    tableName: 'Historique_UE',
    schema: 'dbo',
    timestamps: false
  });
};
