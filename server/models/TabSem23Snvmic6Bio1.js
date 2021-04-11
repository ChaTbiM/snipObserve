const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23Snvmic6Bio1', {
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
    pPofLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'P_Pof_LS'
    },
    proTLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PRO_T_LS'
    },
    inReLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'IN_RE_LS'
    },
    langLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Lang__LS'
    },
    staILs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'STA_I_LS'
    },
    ued61Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED61_LS'
    },
    miAlLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Mi_Al_LS'
    },
    miEnLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Mi_En_LS'
    },
    miInLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Mi_In_LS'
    },
    uef61Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF61_LS'
    },
    immuLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Immu__LS'
    },
    miSaLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Mi_Sa_LS'
    },
    uef62Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF62_LS'
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
    tableName: 'TabSem2_3SNVMIC_6_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
