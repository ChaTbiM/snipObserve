module.exports = (sequelize, DataTypes) => {

    const Course = sequelize.define(
        "Course",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
                unique: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            coefficient: {
                type: DataTypes.TINYINT,
                allowNull: false,
                unsigned: true
            },
            credits: {
                type: DataTypes.TINYINT,
                allowNull: false,
                unsigned: true
            },
        },
        {
            tableName: "courses",
            timestamps: false

        }
    );

    return Course;
};


