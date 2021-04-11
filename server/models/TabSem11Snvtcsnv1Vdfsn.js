const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11Snvtcsnv1Vdfsn', {
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
    d111Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'D111_LS'
    },
    ued11Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UED11_LS'
    },
    f111Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F111_LS'
    },
    f112Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F112_LS'
    },
    uef11Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF11_LS'
    },
    m111Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M111_LS'
    },
    m112Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M112_LS'
    },
    uem11Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM11_LS'
    },
    t111Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T111_LS'
    },
    uet11Ls: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET11_LS'
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
    tableName: 'TabSem1_1SNVTCSNV1_VDFSN',
    schema: 'dbo',
    timestamps: false
  });
};
