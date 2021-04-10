const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Enseignants', {
    refEnseignant: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      field: 'Réf_Enseignant'
    },
    nomEnseignant: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Nom_Enseignant'
    },
    prenomEnseignant: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Prénom_Enseignant'
    },
    sexe: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'Sexe'
    },
    adresse: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Adresse'
    },
    nTel: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'N°Tél'
    },
    refGrade: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'Grades',
        key: 'Réf_Grade'
      },
      field: 'Réf_Grade'
    },
    refFonction: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'Fonctions',
        key: 'Réf_Fonction'
      },
      field: 'Réf_Fonction'
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
    totalCharges: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'Total_Charges'
    },
    chargecours: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    chargeTd: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'chargeTD'
    },
    chargeTp: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'chargeTP'
    },
    categorie: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "1 : Permanent, 2: Vacataire, 3"
    },
    totcours: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'Totcours'
    },
    totTd: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'TotTD'
    },
    totTp: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'TotTP'
    },
    adminOuPas: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'admin_ou_pas'
    },
    pwdEnseignant: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'pwd_enseignant'
    },
    ssmaTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SSMA_TimeStamp'
    },
    grade: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    typeEns: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'type_ens'
    }
  }, {
    sequelize,
    tableName: 'Enseignants',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Enseignants$DépartementsEnseignants",
        fields: [
          { name: "Réf_Département" },
        ]
      },
      {
        name: "Enseignants$EnseignantsRéf_Département",
        fields: [
          { name: "Réf_Département" },
        ]
      },
      {
        name: "Enseignants$FonctionsEnseignants",
        fields: [
          { name: "Réf_Fonction" },
        ]
      },
      {
        name: "Enseignants$GradesEnseignants",
        fields: [
          { name: "Réf_Grade" },
        ]
      },
      {
        name: "Enseignants$PrimaryKey",
        unique: true,
        fields: [
          { name: "Réf_Enseignant" },
        ]
      },
      {
        name: "Enseignants$TypeEnseignantEnseignants",
        fields: [
          { name: "categorie" },
        ]
      },
    ]
  });
};
