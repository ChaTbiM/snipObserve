const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OccupationSalles', {
    enseignant: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Enseignant'
    },
    cours: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'Cours'
    },
    refEmplacement: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Réf_Emplacement'
    },
    heureDebut: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'Heure_Début'
    },
    heureFin: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'Heure_Fin'
    },
    txtHeureDebut: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Txt_Heure_Début'
    },
    txtHeureFin: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Txt_Heure_Fin'
    },
    jour: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Jour'
    },
    refSection: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      field: 'Réf_Section'
    },
    refGroup: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      field: 'Réf_Group'
    },
    departement: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Département'
    },
    faculte: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Faculté'
    },
    annee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'Année'
    },
    cycle: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Cycle'
    },
    anneeCycle: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'AnnéeCycle'
    },
    ref: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'Ref'
    }
  }, {
    sequelize,
    tableName: 'Occupation_salles',
    schema: 'dbo',
    timestamps: false
  });
};
