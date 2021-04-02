module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
        "Student",
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
        },
        {
            tableName: "students",
            timestamps: false
        }
    );

    return Student;
};
