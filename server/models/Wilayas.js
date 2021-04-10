const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Wilayas', {
    codeWilaya: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      field: 'Code_wilaya'
    },
    wilaya: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    wilayaAr: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Wilaya_ar'
    }
  }, {
    sequelize,
    tableName: 'Wilayas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Wilayas$PrimaryKey",
        unique: true,
        fields: [
          { name: "Code_wilaya" },
        ]
      },
    ]
  });
};
