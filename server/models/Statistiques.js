const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Statistiques', {
    motif: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: " ",
      comment: "nom du dossier",
      field: 'Motif'
    },
    nbre: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "admis session1",
      field: 'Nbre'
    },
    stat: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "année d'étude",
      field: 'Stat'
    },
    controle1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "domaine",
      field: 'Contrôle1'
    },
    controle2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "admis session2",
      field: 'Contrôle2'
    },
    controle3: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "admis avec dettes",
      field: 'Contrôle3'
    },
    controle4: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "nbre des ajournés",
      field: 'Contrôle4'
    },
    controle5: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "nbre des abandons",
      field: 'Contrôle5'
    },
    controle6: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "parcours",
      field: 'Contrôle6'
    },
    controle7: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Faculté + Département",
      field: 'Contrôle7'
    },
    controle8: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Etablissement",
      field: 'Contrôle8'
    },
    controle9: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "non utilisé",
      field: 'Contrôle9'
    },
    controle10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "somme des étudiants",
      field: 'Contrôle10'
    },
    controle11: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "année",
      field: 'Contrôle11'
    },
    chText1: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'ch_text1'
    },
    chText2: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'ch_text2'
    },
    chNum1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Ch_num1'
    },
    chNum2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Ch_num2'
    },
    chDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'Ch_date'
    },
    ssmaTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SSMA_TimeStamp'
    }
  }, {
    sequelize,
    tableName: 'Statistiques',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Statistiques$Ch_num1",
        fields: [
          { name: "Ch_num1" },
        ]
      },
      {
        name: "Statistiques$Ch_num2",
        fields: [
          { name: "Ch_num2" },
        ]
      },
    ]
  });
};
