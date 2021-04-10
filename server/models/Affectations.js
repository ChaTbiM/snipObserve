const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Affectations', {
    refEnseignant: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      field: 'Réf_Enseignant'
    },
    refCours: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'Réf_Cours'
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
    txtHd: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'TxtHD'
    },
    heureFin: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'Heure_Fin'
    },
    txtHf: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'TxtHF'
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
    anneeCycle: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'AnnéeCycle'
    },
    typeCours: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'type_Cours'
    },
    delai1: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'délai1'
    },
    delai2: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'délai2'
    },
    delai3: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'délai3'
    },
    delai4: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'délai4'
    }
  }, {
    sequelize,
    tableName: 'Affectations',
    schema: 'dbo',
    timestamps: false
  });
};
