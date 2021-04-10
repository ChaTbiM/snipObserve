const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11Snvphp2Ag1', {
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
    legiLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Légi_LA'
    },
    ueT1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UE_T1_LA'
    },
    gestiLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Gesti_LA'
    },
    gestpLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Gestp_LA'
    },
    uf2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF2_LA'
    },
    chimALa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ChimA_LA'
    },
    ecotoLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Ecoto_LA'
    },
    ufe1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFE_1_LA'
    },
    analLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Anal_LA'
    },
    bioseLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Biosé_LA'
    },
    umD1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM_D1_LA'
    },
    methLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Méth_LA'
    },
    umD2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM_D2_LA'
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
    tableName: 'TabSem1_1SNVPHP2_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
