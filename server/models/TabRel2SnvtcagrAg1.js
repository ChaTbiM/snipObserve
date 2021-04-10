const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel2SnvtcagrAg1', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      field: 'NUM'
    },
    nins: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'NINS'
    },
    c311: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C311'
    },
    cf311: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF311'
    },
    cd311: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD311'
    },
    cm311: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM311'
    },
    co311: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO311'
    },
    ca311: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA311'
    },
    c312: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C312'
    },
    cf312: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF312'
    },
    cd312: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD312'
    },
    cm312: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM312'
    },
    co312: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO312'
    },
    ca312: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA312'
    },
    c313: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C313'
    },
    cf313: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF313'
    },
    cd313: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD313'
    },
    cm313: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM313'
    },
    co313: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO313'
    },
    ca313: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA313'
    },
    u31: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U31'
    },
    un31: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN31'
    },
    uf31: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF31'
    },
    ud31: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD31'
    },
    um31: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM31'
    },
    uo31: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO31'
    },
    ua31: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA31'
    },
    c321: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C321'
    },
    cf321: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF321'
    },
    cd321: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD321'
    },
    cm321: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM321'
    },
    co321: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO321'
    },
    ca321: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA321'
    },
    c322: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C322'
    },
    cf322: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF322'
    },
    cd322: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD322'
    },
    cm322: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM322'
    },
    co322: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO322'
    },
    ca322: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA322'
    },
    u32: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U32'
    },
    un32: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN32'
    },
    uf32: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF32'
    },
    ud32: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD32'
    },
    um32: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM32'
    },
    uo32: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO32'
    },
    ua32: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA32'
    },
    c331: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C331'
    },
    cf331: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF331'
    },
    cd331: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD331'
    },
    cm331: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM331'
    },
    co331: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO331'
    },
    ca331: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA331'
    },
    u33: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U33'
    },
    un33: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN33'
    },
    uf33: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF33'
    },
    ud33: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD33'
    },
    um33: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM33'
    },
    uo33: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO33'
    },
    ua33: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA33'
    },
    c441: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C441'
    },
    cf441: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF441'
    },
    cd441: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD441'
    },
    cm441: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM441'
    },
    co441: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO441'
    },
    ca441: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA441'
    },
    c442: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C442'
    },
    cf442: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF442'
    },
    cd442: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD442'
    },
    cm442: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM442'
    },
    co442: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO442'
    },
    ca442: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA442'
    },
    u44: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U44'
    },
    un44: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN44'
    },
    uf44: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF44'
    },
    ud44: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD44'
    },
    um44: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM44'
    },
    uo44: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO44'
    },
    ua44: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA44'
    },
    c451: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C451'
    },
    cf451: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF451'
    },
    cd451: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD451'
    },
    cm451: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM451'
    },
    co451: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO451'
    },
    ca451: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA451'
    },
    c452: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C452'
    },
    cf452: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF452'
    },
    cd452: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD452'
    },
    cm452: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM452'
    },
    co452: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO452'
    },
    ca452: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA452'
    },
    u45: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U45'
    },
    un45: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN45'
    },
    uf45: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF45'
    },
    ud45: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD45'
    },
    um45: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM45'
    },
    uo45: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO45'
    },
    ua45: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA45'
    },
    c461: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C461'
    },
    cf461: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF461'
    },
    cd461: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD461'
    },
    cm461: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM461'
    },
    co461: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO461'
    },
    ca461: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA461'
    },
    u46: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U46'
    },
    un46: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN46'
    },
    uf46: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF46'
    },
    ud46: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD46'
    },
    um46: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM46'
    },
    uo46: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO46'
    },
    ua46: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA46'
    },
    c471: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C471'
    },
    cf471: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF471'
    },
    cd471: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD471'
    },
    cm471: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM471'
    },
    co471: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO471'
    },
    ca471: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA471'
    },
    u47: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U47'
    },
    un47: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN47'
    },
    uf47: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF47'
    },
    ud47: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD47'
    },
    um47: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM47'
    },
    uo47: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO47'
    },
    ua47: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA47'
    }
  }, {
    sequelize,
    tableName: 'TabRel_2SNVTCAGR_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
