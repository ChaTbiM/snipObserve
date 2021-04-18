const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel2StUmhAg1', {
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
    c361: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C361'
    },
    cf361: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF361'
    },
    cd361: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD361'
    },
    cm361: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM361'
    },
    co361: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO361'
    },
    ca361: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA361'
    },
    u36: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U36'
    },
    un36: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN36'
    },
    uf36: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF36'
    },
    ud36: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD36'
    },
    um36: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM36'
    },
    uo36: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO36'
    },
    ua36: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA36'
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
    },
    c481: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C481'
    },
    cf481: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF481'
    },
    cd481: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD481'
    },
    cm481: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM481'
    },
    co481: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO481'
    },
    ca481: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA481'
    },
    u48: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U48'
    },
    un48: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN48'
    },
    uf48: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF48'
    },
    ud48: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD48'
    },
    um48: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM48'
    },
    uo48: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO48'
    },
    ua48: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA48'
    },
    c491: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C491'
    },
    cf491: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF491'
    },
    cd491: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD491'
    },
    cm491: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM491'
    },
    co491: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO491'
    },
    ca491: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA491'
    },
    u49: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U49'
    },
    un49: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN49'
    },
    uf49: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF49'
    },
    ud49: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD49'
    },
    um49: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM49'
    },
    uo49: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO49'
    },
    ua49: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA49'
    }
  }, {
    sequelize,
    tableName: 'TabRel_2STUmh_AG1',
    schema: 'dbo',
    timestamps: false
  });
};