const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableDeTravaille', {
    nIns: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'N°Ins'
    },
    mod1: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod1'
    },
    mod2: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod2'
    },
    mod3: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod3'
    },
    mod4: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod4'
    },
    mod5: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod5'
    },
    mod6: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod6'
    },
    mod7: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod7'
    },
    mod8: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod8'
    },
    mod9: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod9'
    },
    mod10: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod10'
    },
    mod11: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod11'
    },
    mod12: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod12'
    },
    mod13: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod13'
    },
    mod14: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod14'
    },
    mod15: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod15'
    },
    mod16: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod16'
    },
    mod17: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Mod17'
    },
    chText1: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'ch_text1'
    },
    chText2: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'ch_text2'
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
      field: 'Ch_date'
    },
    ssmaTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SSMA_TimeStamp'
    }
  }, {
    sequelize,
    tableName: 'Table_De_Travaille',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Table_De_Travaille$Ch_num1",
        fields: [
          { name: "Ch_num1" },
        ]
      },
      {
        name: "Table_De_Travaille$Ch_num2",
        fields: [
          { name: "Ch_num2" },
        ]
      },
      {
        name: "Table_De_Travaille$N°Ins",
        fields: [
          { name: "N°Ins" },
        ]
      },
    ]
  });
};
