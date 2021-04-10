const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Grades', {
    refGrade: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: 'Réf_Grade'
    },
    grade: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Grade'
    },
    mtHoraire: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'MtHoraire'
    },
    mtMonsuel: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: "Pour les associés",
      field: 'MtMonsuel'
    },
    gradeAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Grade_Ar'
    },
    ssmaTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SSMA_TimeStamp'
    }
  }, {
    sequelize,
    tableName: 'Grades',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Grades$GradesRéf_Grade",
        fields: [
          { name: "Réf_Grade" },
        ]
      },
      {
        name: "Grades$PrimaryKey",
        unique: true,
        fields: [
          { name: "Réf_Grade" },
        ]
      },
    ]
  });
};
