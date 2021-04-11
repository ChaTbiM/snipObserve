const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22Snvmpv3Ag1', {
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
    pyhTLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Pyh_t_LA'
    },
    ueDLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_D_LA'
    },
    mecaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Méca_LA'
    },
    moyeLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moye_LA'
    },
    ueF2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_F2_LA'
    },
    entpLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Entp__LA'
    },
    ueTLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_T_LA'
    },
    biotLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Biot_LA'
    },
    epidLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Epid_LA'
    },
    uef1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_1_LA'
    },
    ecotLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Ecot_LA'
    },
    methoLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Métho_LA'
    },
    umdLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UMD_LA'
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
    tableName: 'TabSem2_2SNVMPV3_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
