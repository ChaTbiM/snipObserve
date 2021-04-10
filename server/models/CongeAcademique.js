const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CongeAcademique', {
    codeConge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'code_conge'
    },
    designationConge: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'designation_conge'
    },
    designationCongeAr: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'designation_conge_Ar'
    }
  }, {
    sequelize,
    tableName: 'Conge_academique',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Conge_academique$Conge_academiqueConstraint",
        unique: true,
        fields: [
          { name: "code_conge" },
          { name: "designation_conge" },
        ]
      },
    ]
  });
};
