const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Stugeo3Ag1', {
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
    angUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Ang_UU'
    },
    inforUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Infor_UU'
    },
    uet12Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET12_UU'
    },
    crisUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CRIS_UU'
    },
    minerUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Minér_UU'
    },
    uffUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFF_UU'
    },
    geoloUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Géolo_UU'
    },
    tectoUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Tecto_UU'
    },
    uff2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFF2_UU'
    },
    paleoUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Paléo_UU'
    },
    straUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Stra_UU'
    },
    uff3Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UFF3_UU'
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
    tableName: 'TabSem1_2STUGEO3_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
