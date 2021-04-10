const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Options', {
    codeFilliere: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      field: 'Code_fillière'
    },
    filliere: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Fillière'
    },
    filliereAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'FillièreAr'
    },
    descriptif: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Descriptif du domaine\/parcours",
      field: 'Descriptif'
    },
    natDiplome: {
      type: DataTypes.STRING(18),
      allowNull: true,
      field: 'nat_diplome'
    },
    specialite: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'spécialité'
    },
    specialiteAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'specialité_ar'
    },
    codeCycle: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Code_Cycle'
    },
    refDepartement: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Réf_Département'
    },
    us: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nbreAnnee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Nbre_Année'
    },
    idResp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_resp'
    },
    idResp2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_resp2'
    },
    idResp3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_resp3'
    },
    ann: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ann1: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ann2: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ann3: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    usi: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Options',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Options$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code_fillière" },
        ]
      },
    ]
  });
};
