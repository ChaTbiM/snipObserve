const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem03SnvpV6Ag1', {
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
    inrecLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Inrec_LA'
    },
    legPhLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'LégPh_LA'
    },
    ued30La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED30_LA'
    },
    mluriLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MLURI_LA'
    },
    pglinLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PGLIN_LA'
    },
    uef31La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF31_LA'
    },
    malheLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Malhe_LA'
    },
    phytoLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'PHYTO_LA'
    },
    uem02La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM02_LA'
    },
    biomLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOM_LA'
    },
    vitcuLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'VITCU_LA'
    },
    uem03La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM03_LA'
    },
    biomeLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOME_LA'
    },
    projeLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Proje_LA'
    },
    uet04La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET04_LA'
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
    tableName: 'TabSem0_3SNVP_V6_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
