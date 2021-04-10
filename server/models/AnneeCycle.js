const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AnneeCycle', {
    codeCycle: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      comment: "codes MIAS,SM,ST,SNV,Sport",
      field: 'Code_Cycle'
    },
    designationCycle: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "désignations Mias",
      field: 'Désignation_Cycle'
    },
    nbreAnnee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'Nbre_Année'
    },
    designationCycleAr: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "désignations Arabe",
      field: 'Désignation_CycleAr'
    },
    descriptif: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Descriptif du domaine\/parcours",
      field: 'Descriptif'
    },
    ssmaTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SSMA_TimeStamp'
    }
  }, {
    sequelize,
    tableName: 'AnnéeCycle',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AnnéeCycle$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code_Cycle" },
        ]
      },
    ]
  });
};
