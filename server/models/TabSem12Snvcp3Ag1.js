const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem12Snvcp3Ag1', {
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
    labelLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Label_LA'
    },
    uEdLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_ED_LA'
    },
    agruLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Agru_LA'
    },
    oleiLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Oléi_LA'
    },
    rosaLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Rosa_LA'
    },
    uEf1La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EF1_LA'
    },
    outiLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Outi_LA'
    },
    statiLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Stati_LA'
    },
    uEmLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_EM_LA'
    },
    entLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Ent__LA'
    },
    inbLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Inb_LA'
    },
    uEtLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_ET_LA'
    },
    arborLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Arbor_LA'
    },
    viticLa: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Vitic_LA'
    },
    uF2La: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_F2_LA'
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
    tableName: 'TabSem1_2SNVCP3_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
