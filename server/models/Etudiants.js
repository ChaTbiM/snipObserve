const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Etudiants', {
    nIns: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      field: 'N°Ins'
    },
    nomEtudiant: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Nom_Etudiant'
    },
    prenomEtudiant: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Prénom_Etudiant'
    },
    nomArabe: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Nom_Arabe'
    },
    prenomArabe: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Prénom_Arabe'
    },
    dateNaissance: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Date de naissance",
      field: 'Date_naissance'
    },
    lieuNaissance: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Lieu_naissance'
    },
    sexe: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "M : Masculin , F : Feminin",
      field: 'Sexe'
    },
    adresse: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Adresse'
    },
    nationnalite: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Nationnalité'
    },
    typeInscription: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "Non utilisé",
      field: 'Type_Inscription'
    },
    nBac: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'N°_Bac'
    },
    codeWilaya: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Non utilisé",
      references: {
        model: 'Wilayas',
        key: 'Code_wilaya'
      },
      field: 'Code_Wilaya'
    },
    codeDiplome: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "Non utilisé",
      field: 'Code_Diplôme'
    },
    filiere: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "100-Informatique\/101\/500\/501..",
      field: 'Filière'
    },
    annee: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "Non utilisé",
      field: 'Année'
    },
    bourse: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Non utilisé",
      field: 'Bourse'
    },
    interne: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Non utilisé",
      field: 'Interne'
    },
    redoublant: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'Redoublant'
    },
    nbre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'Nbre'
    },
    anneeBac: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'Année_Bac'
    },
    nSerieBac: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'N_Série_Bac'
    },
    mentionBac: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'Mention_Bac'
    },
    noteBac: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0,
      field: 'Note_Bac'
    },
    wilayaBac: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'Wilaya_Bac'
    },
    refGroup: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      field: 'Réf_Group'
    },
    refSection: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      field: 'Réf_Section'
    },
    moyGle: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00",
      comment: "Moyenne de l'année",
      field: 'Moy_Gle'
    },
    observation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Ajourné",
      field: 'Observation'
    },
    anneeCycle: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'AnnéeCycle'
    },
    sanction: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Sanction'
    },
    anneeEtude: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'AnnéeEtude'
    },
    cycleEtude: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CycleEtude'
    },
    filiereEtude: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'FilièreEtude'
    },
    oriente: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "uniquement pour les étudiants ",
      field: 'Orienté'
    },
    grade: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "uniquement pour les étudiants ",
      field: 'Gradé'
    },
    anneeOrientation: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'AnnéeOrientation'
    },
    cycleOrientation: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CycleOrientation'
    },
    filiereOrientation: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "Après la délibération certains",
      field: 'FilièreOrientation'
    },
    prenomPere: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'prenom_pere'
    },
    nomPrenomMere: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'nom_prenom_mere'
    },
    natureAbondan: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 : non abondoné ou bien réint",
      field: 'Nature_Abondan'
    },
    transfere: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Cas d'un étudiant transféré d'",
      field: 'Transféré'
    },
    codeDaira: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "0",
      field: 'Code_Daira'
    },
    universite: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Non utilisé",
      field: 'Université'
    },
    codeInstitut: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Non utilisé",
      field: 'Code_Institut'
    },
    cycle: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'Cycle'
    },
    controle1: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Contrôle1'
    },
    controle2: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Contrôle2'
    },
    champsSupText1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'ChampsSupText1'
    },
    champsSupText2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'ChampsSupText2'
    },
    champsSupNum1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'ChampsSupNum1'
    },
    champsSupNum2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'ChampsSupNum2'
    },
    moy1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00",
      field: 'Moy1Sem'
    },
    moy2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00",
      field: 'Moy2Sem'
    },
    moy3Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00",
      field: 'Moy3Sem'
    },
    moy4Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00",
      field: 'Moy4Sem'
    },
    moy5Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00",
      field: 'Moy5Sem'
    },
    moy6Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00",
      field: 'Moy6Sem'
    },
    credit1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      comment: "les champs Moy1Sem et Moy2Sem ",
      field: 'Crédit1Sem'
    },
    credit2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Crédit2Sem'
    },
    credit3Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Crédit3Sem'
    },
    credit4Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Crédit4Sem'
    },
    credit5Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Crédit5Sem'
    },
    credit6Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "((0))",
      field: 'Crédit6Sem'
    },
    rachtable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'Rachtable'
    },
    orient: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "vrai lorsaque l'etudiant est r",
      field: 'Orient'
    },
    photo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "PhotoVide.bmp",
      field: 'Photo'
    },
    presume: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    nbreTotal: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Nbre total de redoublement",
      field: 'Nbre_Total'
    },
    nInsAnc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'N°Ins_Anc'
    },
    lieuNaissanceFr: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Lieu_Naissance_FR'
    },
    nationaliteFr: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Nationalité_Fr'
    },
    nbDettes: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      field: 'Nb_dettes'
    },
    nbSession2: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      field: 'Nb_session2'
    },
    reintegre: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "réintégré après un congé acadé"
    },
    rec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    moyGleL1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_GleL1'
    },
    moyGleL2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_GleL2'
    },
    moyGleL3: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_GleL3'
    },
    moyGleM2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_GleM2'
    },
    moyGleM1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_GleM1'
    },
    moyGleL: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_GleL'
    },
    moyGleM: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0,
      field: 'Moy_GleM'
    },
    fil: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cyc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deci: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    totcredL1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    totcredL2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    totcredL3: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    totcredm1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    totcredm2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    nid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pins: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    codecom: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Etudiants',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Etudiants$AnnéeCycleEtudiants",
        fields: [
          { name: "CycleEtude" },
        ]
      },
      {
        name: "Etudiants$Code_Daira",
        fields: [
          { name: "Code_Daira" },
        ]
      },
      {
        name: "Etudiants$Code_Diplôme",
        fields: [
          { name: "Code_Diplôme" },
        ]
      },
      {
        name: "Etudiants$Code_Institut",
        fields: [
          { name: "Code_Institut" },
        ]
      },
      {
        name: "Etudiants$EtudiantsCode_wilaya",
        fields: [
          { name: "Code_Wilaya" },
        ]
      },
      {
        name: "Etudiants$PrimaryKey",
        unique: true,
        fields: [
          { name: "N°Ins" },
        ]
      },
      {
        name: "Etudiants$SériesEtudiants",
        fields: [
          { name: "N_Série_Bac" },
        ]
      },
      {
        name: "Etudiants$WilayasEtudiants",
        fields: [
          { name: "Code_Wilaya" },
        ]
      },
    ]
  });
};
