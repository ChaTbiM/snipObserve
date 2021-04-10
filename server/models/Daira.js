const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Daira', {
    codeDaira: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      field: 'Code_Daira'
    },
    daira: {
      type: DataTypes.STRING(65),
      allowNull: true,
      field: 'Daira'
    }
  }, {
    sequelize,
    tableName: 'Daira',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Daira$Code_Diplôme",
        unique: true,
        fields: [
          { name: "Code_Daira" },
        ]
      },
      {
        name: "Daira$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code_Daira" },
        ]
      },
    ]
  });
};
