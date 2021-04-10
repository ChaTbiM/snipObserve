const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel2SnvnutDBio2', {
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
    c341: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C341'
    },
    cf341: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF341'
    },
    cd341: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD341'
    },
    cm341: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM341'
    },
    co341: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO341'
    },
    ca341: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA341'
    },
    u34: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U34'
    },
    un34: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN34'
    },
    uf34: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF34'
    },
    ud34: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD34'
    },
    um34: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM34'
    },
    uo34: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO34'
    },
    ua34: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA34'
    },
    c351: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C351'
    },
    cf351: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF351'
    },
    cd351: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD351'
    },
    cm351: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM351'
    },
    co351: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO351'
    },
    ca351: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA351'
    },
    c352: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C352'
    },
    cf352: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF352'
    },
    cd352: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD352'
    },
    cm352: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM352'
    },
    co352: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO352'
    },
    ca352: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA352'
    },
    u35: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U35'
    },
    un35: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN35'
    },
    uf35: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF35'
    },
    ud35: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD35'
    },
    um35: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM35'
    },
    uo35: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO35'
    },
    ua35: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA35'
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
    }
  }, {
    sequelize,
    tableName: 'TabRel_2SNVNUT_D_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
