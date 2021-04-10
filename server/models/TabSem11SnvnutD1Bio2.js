const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11SnvnutD1Bio2', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
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
    lan1Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LAN1__MS'
    },
    pOAMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'P_O_A_MS'
    },
    ud11Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD11_MS'
    },
    cANMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'C_A_N_MS'
    },
    phMMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PH_M__MS'
    },
    uf11Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF11_MS'
    },
    toAlMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TO_AL_MS'
    },
    uf12Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF12__MS'
    },
    cMAMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'C_M_A_MS'
    },
    gSuiMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'G_SUI_MS'
    },
    um11Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM11_MS'
    },
    tehCMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Teh_C_MS'
    },
    ut11Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UT11_MS'
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
    tableName: 'TabSem1_1SNVNUT_D1_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
