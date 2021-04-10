const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem21Snvpna1Ag1', {
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
    biotELa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BiotE_LA'
    },
    uedALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED_A_LA'
    },
    filPaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'FilPA_LA'
    },
    phyAnLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PhyAn_LA'
    },
    zConELa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ZConE_LA'
    },
    uefALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_A_LA'
    },
    afLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AF_LA'
    },
    avnLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'AVN_LA'
    },
    uef2ALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF2A_LA'
    },
    ddpvLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'DDPV_LA'
    },
    tpseLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TPSE_LA'
    },
    uemALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM_A_LA'
    },
    angTLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Ang_T_LA'
    },
    commLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Comm__LA'
    },
    uetALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET_A_LA'
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
    tableName: 'TabSem2_1SNVPNA1_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
