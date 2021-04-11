const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem23Stuga6Ag1', {
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
    f611Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'F611_UU'
    },
    uef61Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF61_UU'
    },
    m611Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'M611_UU'
    },
    uem61Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM61_UU'
    },
    o641Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'O641_UU'
    },
    o642Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'O642_UU'
    },
    ueo64Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEO64_UU'
    },
    o651Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'O651_UU'
    },
    o652Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'O652_UU'
    },
    ueo65Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEO65_UU'
    },
    o661Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'O661_UU'
    },
    o662Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'O662_UU'
    },
    ueo66Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEO66_UU'
    },
    t611Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T611_UU'
    },
    uet61Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET61_UU'
    },
    t621Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'T621_UU'
    },
    uet62Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UET62_UU'
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
    tableName: 'TabSem2_3STUGA6_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
