const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem22Snvtcsb3Vdfsn', {
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
    biopLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIOP__LS'
    },
    ud13Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UD13_LS'
    },
    zooLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'ZOO_LS'
    },
    uf13Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF13_LS'
    },
    bioLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'BIO__LS'
    },
    geneLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'GENE__LS'
    },
    uf23Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UF23_LS'
    },
    tceALs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'TCE_A_LS'
    },
    um13Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM13_LS'
    },
    metTLs: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MET_T_LS'
    },
    um23Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UM23_LS'
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
    tableName: 'TabSem2_2SNVTCSB3_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
