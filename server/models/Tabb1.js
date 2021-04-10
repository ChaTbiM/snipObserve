const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tabb1', {
    nins: {
      type: DataTypes.STRING(15),
      allowNull: false
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
      field: 'Date_naissance'
    },
    lieuNaissance: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Lieu_naissance'
    },
    moyGle: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy_Gle'
    },
    observation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Observation'
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
    moy1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy1Sem'
    },
    moy2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy2Sem'
    },
    moy3Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy3Sem'
    },
    moy4Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy4Sem'
    },
    moy5Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy5Sem'
    },
    moy6Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy6Sem'
    },
    credit1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Crédit1Sem'
    },
    credit2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Crédit2Sem'
    },
    credit3Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Crédit3Sem'
    },
    credit4Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Crédit4Sem'
    },
    credit5Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Crédit5Sem'
    },
    credit6Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Crédit6Sem'
    },
    anneeCycle: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'AnnéeCycle'
    },
    natureDiplome: {
      type: DataTypes.STRING(18),
      allowNull: true,
      field: 'nature_diplome'
    },
    numArrete: {
      type: DataTypes.STRING(9),
      allowNull: true,
      field: 'Num_arrete'
    },
    dateArrete: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'Date_arrete'
    },
    natureEts: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'Nature_ets'
    },
    adresseEts: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Adresse_ets'
    },
    telephoneEts: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Telephone_ets'
    },
    faxEts: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Fax_ets'
    },
    webEts: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Web_ets'
    },
    langue1: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'Langue_1'
    },
    autresLangues: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Autres_langues'
    },
    classif: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cdtAcces: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'cdt_acces'
    },
    possibiliteAcces: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'possibilite_acces'
    },
    posProfOfferte: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'pos_prof_offerte'
    },
    nomPrenomSignataire: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Nom_prenom_signataire'
    },
    qualiteSignataire: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'qualite_signataire'
    },
    dateSignature: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'Date_signature'
    },
    internalRank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'internal_rank'
    },
    projAcad: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'proj_acad'
    },
    mgf: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MGF'
    },
    mgc: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MGC'
    },
    rang: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    a: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'A'
    },
    b: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'B'
    },
    c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'C'
    },
    d: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'D'
    },
    e: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'E'
    },
    classe: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'TOTAL'
    },
    maxA: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    minA: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    maxB: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    minB: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    maxC: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    minC: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    maxD: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    minD: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    maxE: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    minE: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TABB1',
    schema: 'dbo',
    timestamps: false
  });
};
