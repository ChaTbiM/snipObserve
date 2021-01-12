module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
          unique: true,
        },
        fullName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "users",
      }
    );
    
  
    // const models = sequelize.models;
  
    // User.associate = (models) => {
      
    // };
  
    return User;
  };
  