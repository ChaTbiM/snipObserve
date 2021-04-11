const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11SnvqPS2Bio2', {
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
    enGMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EN_G__MS'
    },
    puCaMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PU_CA_MS'
    },
    tCFMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_C_F_MS'
    },
    uf2Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF2___MS'
    },
    phaMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PHA___MS'
    },
    toSMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TO_S__MS'
    },
    um2Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM2___MS'
    },
    legNMs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LEG_N_MS'
    },
    ut2Ms: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UT2___MS'
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
    tableName: 'TabSem1_1SNVQ_P_S2_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
