const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22StUmh3Vdfsn', {
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
    modeUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Modé_UU'
    },
    pedUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'péd_UU'
    },
    uEf1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EF1_UU'
    },
    polluUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Pollu_UU'
    },
    uEf2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EF2_UU'
    },
    hydrUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Hydr_UU'
    },
    uEtUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_ET_UU'
    },
    inireUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Inire_UU'
    },
    sig1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Sig1_UU'
    },
    ueDUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_D_UU'
    },
    teCaUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Te_ca_UU'
    },
    technUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Téchn_UU'
    },
    ueM1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_M1_UU'
    },
    amenaUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Aména_UU'
    },
    ueM2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_M2_UU'
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
    tableName: 'TabSem2_2STUmh3_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
