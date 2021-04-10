const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Departements', {
    refDepartement: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      field: 'Réf_Département'
    },
    refFaculte: {
      type: DataTypes.STRING(5),
      allowNull: true,
      references: {
        model: 'Facultés',
        key: 'Réf_Faculté'
      },
      field: 'Réf_Faculté'
    },
    designationDepartement: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Désignation_Département'
    },
    designationDepartementAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Désignation_Département_Ar'
    },
    emailChef: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email_chef'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Départements',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Départements$FacultésDépartements",
        fields: [
          { name: "Réf_Faculté" },
        ]
      },
      {
        name: "Départements$PrimaryKey",
        unique: true,
        fields: [
          { name: "Réf_Département" },
        ]
      },
    ]
  });
};
