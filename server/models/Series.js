const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Series', {
    nSerie: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'N_Série'
    },
    serie: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Série'
    },
    serieAr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Série_Ar'
    }
  }, {
    sequelize,
    tableName: 'Séries',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Séries$N_Série",
        unique: true,
        fields: [
          { name: "N_Série" },
        ]
      },
      {
        name: "Séries$PrimaryKey",
        unique: true,
        fields: [
          { name: "N_Série" },
        ]
      },
    ]
  });
};
