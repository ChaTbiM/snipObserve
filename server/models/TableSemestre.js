const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableSemestre', {
    nIns: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'N°Ins'
    },
    groupe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Ex 1°Semestre et 2° Semestre d",
      field: 'Groupe'
    },
    nLigne: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'N°Ligne'
    },
    ue1Sem: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'UE_1Sem'
    },
    coefUe1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Coef_UE_1Sem'
    },
    creditObtenu1Sem: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_obtenu_1Sem'
    },
    moyUe1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy_UE_1Sem'
    },
    anUe1Sem: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_UE_1Sem'
    },
    cours1Sem: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Cours_1Sem'
    },
    coefCours1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Coef_Cours_1Sem'
    },
    moyModule1Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy_Module_1Sem'
    },
    creditModule1Sem: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Credit_Module_1Sem'
    },
    anCours1Sem: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_Cours_1Sem'
    },
    ue2Sem: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'UE_2Sem'
    },
    coefUe2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Coef_UE_2Sem'
    },
    creditObtenu2Sem: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_obtenu_2Sem'
    },
    moyUe2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy_UE_2Sem'
    },
    anUe2Sem: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_UE_2Sem'
    },
    cours2Sem: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Cours_2Sem'
    },
    coefCours2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Coef_Cours_2Sem'
    },
    moyModule2Sem: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Moy_Module_2Sem'
    },
    creditModule2Sem: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Credit_Module_2Sem'
    },
    anCours2Sem: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'An_Cours_2Sem'
    },
    observation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Ajourné",
      field: 'Observation'
    },
    creditUeDeBase: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'credit_ue_de_base'
    },
    chText1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Ch_text1'
    },
    chText2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Ch_text2'
    },
    chNum1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Ch_num1'
    },
    chNum2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      field: 'Ch_num2'
    },
    chDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'ch_date'
    },
    codeUe1: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'Code_UE1'
    },
    codeUe2: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'Code_UE2'
    },
    ssmaTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SSMA_TimeStamp'
    }
  }, {
    sequelize,
    tableName: 'TableSemestre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TableSemestre$Ch_num1",
        fields: [
          { name: "Ch_num1" },
        ]
      },
      {
        name: "TableSemestre$Ch_num2",
        fields: [
          { name: "Ch_num2" },
        ]
      },
      {
        name: "TableSemestre$N°Ins",
        fields: [
          { name: "N°Ins" },
        ]
      },
    ]
  });
};
