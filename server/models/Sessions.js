const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sessions', {
    dateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_time'
    },
    groupNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'group_number'
    },
    classId: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'Cours',
        key: 'Réf_Cours'
      },
      field: 'class_id'
    },
    teacherId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'Enseignants',
        key: 'Réf_Enseignant'
      },
      field: 'teacher_id'
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Sessions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Sessions__3213E83F653149CE",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
