const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Facultes', {
    refFaculte: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      field: 'Réf_Faculté'
    },
    faculte: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Faculté'
    },
    faculteAr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'FacultéAr'
    }
  }, {
    sequelize,
    tableName: 'Facultés',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Facultés$PrimaryKey",
        unique: true,
        fields: [
          { name: "Réf_Faculté" },
        ]
      },
    ]
  });
};
