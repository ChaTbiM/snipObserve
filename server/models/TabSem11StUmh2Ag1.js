const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabSem11StUmh2Ag1', {
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
    carAUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Car_A_UU'
    },
    geoPUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Géo_P_UU'
    },
    uEd1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_ED1_UU'
    },
    anglUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Angl_UU'
    },
    uEt1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'U_ET1_UU'
    },
    defiUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Défi_UU'
    },
    uef2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF_2_UU'
    },
    gsInUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'gs_in_UU'
    },
    hdyaUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Hdya_UU'
    },
    uef1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF1__UU'
    },
    hdymUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'hdym_UU'
    },
    trieUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Trié_UU'
    },
    uef2Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEF2__UU'
    },
    geoteUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Géote_UU'
    },
    stageUu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Stage_UU'
    },
    uem1Uu: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'UEM_1_UU'
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
    tableName: 'TabSem1_1STUmh2_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
