const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableDesErreurs', {
    refGrade: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'Réf_Grade'
    },
    grade: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Grade'
    },
    mtHoraire: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'MtHoraire'
    },
    mtMonsuel: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'MtMonsuel'
    },
    gradeAr: {
      type: DataTypes.STRING(255),
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
    tableName: 'Table des erreurs',
    schema: 'dbo',
    timestamps: false
  });
};
