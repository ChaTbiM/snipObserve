const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Snvpna3Ag1', {
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
    appLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'App_LA'
    },
    uedLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED__LA'
    },
    amElLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Am_el_LA'
    },
    conPLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Con_p_LA'
    },
    valPLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Val_p_LA'
    },
    uef1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF1__LA'
    },
    expLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Exp_LA'
    },
    iNvLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'INv__LA'
    },
    outilLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Outil_LA'
    },
    uemLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM__LA'
    },
    entLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ENT_LA'
    },
    initLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Init_LA'
    },
    uetLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET__LA'
    },
    pConLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'P_con_LA'
    },
    proCLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Pro_c_LA'
    },
    uf2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF2__LA'
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
    tableName: 'TabSem1_2SNVPNA3_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
