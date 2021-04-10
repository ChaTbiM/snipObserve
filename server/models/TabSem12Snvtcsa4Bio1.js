const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Snvtcsa4Bio1', {
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
    phAnLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PH_AN_LS'
    },
    uf41Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF4_1_LS'
    },
    aBTLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'A_B_T_LS'
    },
    micLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MIC___LS'
    },
    uf42Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF4_2_LS'
    },
    ecGeLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'EC_GE_LS'
    },
    um41Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM4_1_LS'
    },
    biosLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOS__LS'
    },
    um42Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM4_2_LS'
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
    tableName: 'TabSem1_2SNVTCSA4_BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
