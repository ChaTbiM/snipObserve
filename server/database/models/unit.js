
// CYCLE ENUMS
const LICENCE = "LICENCE";
const MASTER = "MASTER";

// GRADE ENUMS
const FIRST_YEAR = "FIRST_YEAR";
const SECOND_YEAR = "SECOND_YEAR";
const THIRD_YEAR = "THIRD_YEAR";
const FOURTH_YEAR = "FOURTH_YEAR";
const FIFTH_YEAR = "FIFTH_YEAR";

// SEMESTER ENUMS
const FIRST_SEMESTER = "FIRST_SEMESTER";
const SECOND_SEMESTER = "SECOND_SEMESTER";

// Unit Type ENUMS
const FUNDAMENTAL = "FUNDAMENTAL";
const SECONDARY = "SECONDARY"


module.exports = (sequelize, DataTypes) => {

    const Unit = sequelize.define(
        "Unit",
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
            coefficientsSum: {
                type: DataTypes.TINYINT,
                allowNull: false,
                unsigned: true
            },
            credits: {
                type: DataTypes.TINYINT,
                allowNull: false,
                unsigned: true
            },
            cycle: {
                type: DataTypes.ENUM([LICENCE, MASTER]),
                allowNull: false,
                defaultValue: LICENCE,
            },
            grade: {
                type: DataTypes.ENUM([FIRST_YEAR, SECOND_YEAR, THIRD_YEAR, FOURTH_YEAR, FIFTH_YEAR]),
                allowNull: false,
                defaultValue: FIRST_YEAR,
            },
            semester: {
                type: DataTypes.ENUM([FIRST_SEMESTER, SECOND_SEMESTER]),
                allowNull: false,
                defaultValue: FIRST_SEMESTER,
            },
            type: {
                type: DataTypes.ENUM([FUNDAMENTAL, SECONDARY]),
                allowNull: false,
                defaultValue: FUNDAMENTAL
            }
        },
        {
            tableName: "units",
            timestamps: false

        }
    );

    return Unit;
};


