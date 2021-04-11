const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel2SnvbiotBio2', {
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
    c332: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C332'
    },
    cf332: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF332'
    },
    cd332: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD332'
    },
    cm332: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM332'
    },
    co332: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO332'
    },
    ca332: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA332'
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
    }
  }, {
    sequelize,
    tableName: 'TabRel_2SNVBIOT_BIO2',
    schema: 'dbo',
    timestamps: false
  });
};
