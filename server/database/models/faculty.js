module.exports = (sequelize, DataTypes) => {
    const Faculty = sequelize.define(
        "Faculty",
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
        },
        {
            tableName: "faculties",
            timestamps: false

        }
    );

    return Faculty;
};
