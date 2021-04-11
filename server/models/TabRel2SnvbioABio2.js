const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel2SnvbioABio2', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
primaryKey: true,
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
    }
  }, {
    sequelize,
    tableName: 'TabRel_2SNVBIO_A_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
