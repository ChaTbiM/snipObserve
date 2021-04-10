const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Utilisateur', {
    us: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    codeFac: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'code_fac'
    },
    typ: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      field: 'creation_date'
    },
    act: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    dr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    envoi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    semestre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Semestre'
    },
    dettes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    umail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    atdouble: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    nom: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'Nom'
    },
    fr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    schema: 'dbo',
    timestamps: false
  });
};
