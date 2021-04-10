const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableSoc', {
    tel: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codePostal: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'code_postal'
    },
    commune: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'TableSoc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TableSoc$MyFieldConstraint",
        unique: true,
        fields: [
          { name: "commune" },
        ]
      },
    ]
  });
};
