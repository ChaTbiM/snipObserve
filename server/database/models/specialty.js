module.exports = (sequelize, DataTypes) => {
    const Specialty = sequelize.define(
        "Specialty",
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
            tableName: "specialties",
            timestamps: false

        }
    );

    return Specialty;
};
