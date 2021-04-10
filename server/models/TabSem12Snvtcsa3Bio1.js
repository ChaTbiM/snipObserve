const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Snvtcsa3Bio1', {
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
    bioLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIO___LS'
    },
    ud31Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD3_1_LS'
    },
    alSLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AL_S__LS'
    },
    phyVLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PHY_V_LS'
    },
    uf31Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF3_1_LS'
    },
    biochLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOCH_LS'
    },
    genLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GEN___LS'
    },
    uf32Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF3_2_LS'
    },
    tComLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T_COM_LS'
    },
    um31Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM3_1_LS'
    },
    mTraLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M_TRA_LS'
    },
    um32Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM3_2_LS'
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
    tableName: 'TabSem1_2SNVTCSA3_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
