
// CLASS TYPE ENUM
const TD = "TD";
const TP = "TP";

module.exports = (sequelize, DataTypes) => {

    const Class = sequelize.define(
        "Class",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
                unique: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            time: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            classRoom: {
                type: DataTypes.TINYINT,
                allowNull: false,
                unsigned: true
            },
            type: {
                type: DataTypes.ENUM([TD, TP]),
                allowNull: false
            }
        },
        {
            tableName: "classes",
            timestamps: false

        }
    );

    return Class;
};


