const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LogResExcel', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    dep: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    refCours: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'réf_cours'
    },
    cours: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'Cours'
    },
    ens: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dateEnvoi: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_envoi'
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'Email'
    },
    nbetudEnv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nbetud_env'
    },
    datemail: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fichierEnv: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'fichier_env'
    },
    fichierRec: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'fichier_rec'
    },
    nbetud: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dateSaisie: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      field: 'Date_saisie'
    },
    nb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    us: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    session: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    au: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sec: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'log_res_excel',
    schema: 'dbo',
    timestamps: false
  });
};
