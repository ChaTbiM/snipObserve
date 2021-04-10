const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TypesInscription', {
    code: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Type'
    },
    typeAr: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Type_Ar'
    }
  }, {
    sequelize,
    tableName: 'Types_Inscription',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Types_Inscription$Code",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "Types_Inscription$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code" },
        ]
      },
    ]
  });
};
