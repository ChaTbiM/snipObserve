const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Semestre', {
    semestreEnLettre: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'SemestreEnLettre'
    },
    semestreEnChiffre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    semestreEnArabe: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'SemestreEnArabe'
    }
  }, {
    sequelize,
    tableName: 'Semestre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Semestre$PrimaryKey",
        unique: true,
        fields: [
          { name: "SemestreEnChiffre" },
        ]
      },
    ]
  });
};
