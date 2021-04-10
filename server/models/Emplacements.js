const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Emplacements', {
    refEmplacement: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'Réf_Emplacement'
    },
    capacite: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      field: 'Capacité'
    }
  }, {
    sequelize,
    tableName: 'Emplacements',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Emplacements$PrimaryKey",
        unique: true,
        fields: [
          { name: "Réf_Emplacement" },
        ]
      },
    ]
  });
};
