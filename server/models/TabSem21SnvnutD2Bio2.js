const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21SnvnutD2Bio2', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
primaryKey: true,
      field: 'NUM'
    },
    ins: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'INS'
    },
    nom: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'NOM'
    },
    noma: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'NOMA'
    },
    ains: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'AINS'
    },
    etat: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'Etat'
    },
    iniMMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'INI_M_MS'
    },
    ud21Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD21_MS'
    },
    paNuMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PA_NU_MS'
    },
    uf21Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF21__MS'
    },
    fINMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F_I_N_MS'
    },
    iTTMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'I_T_T_MS'
    },
    uf22Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF22__MS'
    },
    biApMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Bi_AP_MS'
    },
    tecAMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TEC_A_MS'
    },
    um21Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM21_MS'
    },
    legRMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LEG_R_MS'
    },
    ut21Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UT21_MS'
    },
    moy: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MOY'
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'CREDIT'
    },
    ses: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'SES'
    },
    res: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'RES'
    }
  }, {
    sequelize,
    tableName: 'TabSem2_1SNVNUT_D2_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
