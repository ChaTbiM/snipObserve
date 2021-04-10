const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Filieres', {
    codeFiliere: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'code_filière'
    },
    filiere: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Filiére'
    },
    specialite: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Spécialité'
    },
    codeInstitut: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'Code_institut'
    },
    codeDiplome1: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'code_diplôme1'
    },
    refDepartement: {
      type: DataTypes.STRING(5),
      allowNull: true,
      references: {
        model: 'Départements',
        key: 'Réf_Département'
      },
      field: 'Réf_Département'
    },
    codeDiplome: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'code_diplôme'
    },
    filiereAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Filiére_Ar'
    },
    specialiteAr: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Spécialité_Ar'
    }
  }, {
    sequelize,
    tableName: 'Filières',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Filières${8D366949-A484-11D6-B01C-00C0DF0389C1}",
        fields: [
          { name: "Réf_Département" },
        ]
      },
      {
        name: "Filières$Code_Cycle",
        fields: [
          { name: "code_diplôme" },
        ]
      },
      {
        name: "Filières$code_diplôme",
        fields: [
          { name: "code_diplôme1" },
        ]
      },
      {
        name: "Filières$code_filière",
        fields: [
          { name: "code_filière" },
        ]
      },
      {
        name: "Filières$Code_institut",
        fields: [
          { name: "Code_institut" },
        ]
      },
      {
        name: "Filières$PrimaryKey",
        unique: true,
        fields: [
          { name: "code_filière" },
        ]
      },
      {
        name: "Filières$Réf_Département",
        fields: [
          { name: "Réf_Département" },
        ]
      },
    ]
  });
};
