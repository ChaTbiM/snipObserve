const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reception', {
    rowid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    boite: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    edatemail: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fichier: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    chemin: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    refCours: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Réf_Cours'
    },
    dep: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    treated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    sec: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    au: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reception',
    schema: 'dbo',
    timestamps: false
  });
};
