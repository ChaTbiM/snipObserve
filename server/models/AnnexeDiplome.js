const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AnnexeDiplome', {
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
    spe: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    projAcad: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'proj_acad'
    }
  }, {
    sequelize,
    tableName: 'Annexe_diplome',
    schema: 'dbo',
    timestamps: false
  });
};
