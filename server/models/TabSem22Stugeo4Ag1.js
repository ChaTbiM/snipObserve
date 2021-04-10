const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22Stugeo4Ag1', {
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
    giochUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GIOCH_UU'
    },
    prmUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PRM_UU'
    },
    prmmUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PRMM_UU'
    },
    uff1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFF1_UU'
    },
    geolUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GEOL_UU'
    },
    tectUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TECT_UU'
    },
    ufff2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFFF2_UU'
    },
    prssUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PRSS_UU'
    },
    sediUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'SEDI_UU'
    },
    ufff3Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFFF3_UU'
    },
    sttUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'STT_UU'
    },
    umm1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UMM1_UU'
    },
    etdeUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ETDE_UU'
    },
    utt1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UTT1_UU'
    },
    gbdsUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GBDS_UU'
    },
    utt2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UTT2_UU'
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
    tableName: 'TabSem2_2STUGEO4_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
