const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Dossier', {
    dossier: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Dossier'
    },
    refFaculte: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Réf_Faculté'
    },
    refDepartement: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Réf_Département'
    },
    faculte: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Faculté'
    },
    departement: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Département'
    },
    annee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'Année'
    },
    semestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'Semestre'
    },
    cycle: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Cycle'
    },
    anneeUniv: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'AnnéeUniv'
    },
    cloture: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'Clôture'
    },
    noteMin: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Note_min'
    },
    deliberation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Délibération'
    },
    nbre: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Nbre'
    },
    universite: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Université'
    },
    passwordApp: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'PasswordApp'
    },
    passwordBdd: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'PasswordBDD'
    },
    anneeEnLettre: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'AnnéeEnLettre'
    },
    semestreEnLettre: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'SemestreEnLettre'
    },
    designationCycle: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'DésignationCycle'
    },
    filliere: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Fillière'
    },
    cTd: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'C_TD'
    },
    cTp: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'C_TP'
    },
    chargeMoyCours: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'ChargeMoyCours'
    },
    chargeMoyTd: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'ChargeMoyTD'
    },
    chargeMoyTp: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'ChargeMoyTP'
    },
    coutHeure: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'CôutHeure'
    },
    nbreSemAnne: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'NbreSemAnne'
    },
    faculteAr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "on ajouté les désignation en a",
      field: 'FacultéAr'
    },
    departementAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "car ds qlq états en peut trouv",
      field: 'DépartementAr'
    },
    filiereAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'FilièreAr'
    },
    anneeEnLettreAr: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'AnnéeEnLettreAr'
    },
    universiteAr: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'UniversitéAr'
    },
    cycleAr: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "désignations Arabe",
      field: 'CycleAr'
    },
    noteSup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "si oui on prend la meilleure n",
      field: 'note_sup'
    },
    abattement: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0,
      field: 'Abattement'
    },
    descriptif: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Descriptif du domaine\/parcours",
      field: 'Descriptif'
    },
    labelFacAr: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'label_fac_ar'
    },
    labelFacFr: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'label_fac_fr'
    },
    louM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'LouM'
    },
    natureDiplome: {
      type: DataTypes.STRING(18),
      allowNull: true,
      field: 'Nature_diplome'
    },
    specialite: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    specialiteAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'specialite_ar'
    },
    ssmaTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SSMA_TimeStamp'
    }
  }, {
    sequelize,
    tableName: 'Dossier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Dossier$Dossier",
        unique: true,
        fields: [
          { name: "Dossier" },
        ]
      },
    ]
  });
};
