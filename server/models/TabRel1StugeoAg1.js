const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel1StugeoAg1', {
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
    c111: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C111'
    },
    cf111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF111'
    },
    cd111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD111'
    },
    cm111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM111'
    },
    co111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO111'
    },
    ca111: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA111'
    },
    u11: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U11'
    },
    un11: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN11'
    },
    uf11: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF11'
    },
    ud11: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD11'
    },
    um11: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM11'
    },
    uo11: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO11'
    },
    ua11: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA11'
    },
    c121: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C121'
    },
    cf121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF121'
    },
    cd121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD121'
    },
    cm121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM121'
    },
    co121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO121'
    },
    ca121: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA121'
    },
    u12: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U12'
    },
    un12: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN12'
    },
    uf12: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF12'
    },
    ud12: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD12'
    },
    um12: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM12'
    },
    uo12: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO12'
    },
    ua12: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA12'
    },
    c131: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C131'
    },
    cf131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF131'
    },
    cd131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD131'
    },
    cm131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM131'
    },
    co131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO131'
    },
    ca131: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA131'
    },
    c132: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C132'
    },
    cf132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF132'
    },
    cd132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD132'
    },
    cm132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM132'
    },
    co132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO132'
    },
    ca132: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA132'
    },
    u13: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U13'
    },
    un13: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN13'
    },
    uf13: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF13'
    },
    ud13: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD13'
    },
    um13: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM13'
    },
    uo13: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO13'
    },
    ua13: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA13'
    },
    c141: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C141'
    },
    cf141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF141'
    },
    cd141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD141'
    },
    cm141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM141'
    },
    co141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO141'
    },
    ca141: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA141'
    },
    c142: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C142'
    },
    cf142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF142'
    },
    cd142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD142'
    },
    cm142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM142'
    },
    co142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO142'
    },
    ca142: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA142'
    },
    c143: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C143'
    },
    cf143: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF143'
    },
    cd143: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD143'
    },
    cm143: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM143'
    },
    co143: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO143'
    },
    ca143: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA143'
    },
    c144: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C144'
    },
    cf144: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF144'
    },
    cd144: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD144'
    },
    cm144: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM144'
    },
    co144: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO144'
    },
    ca144: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA144'
    },
    u14: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U14'
    },
    un14: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN14'
    },
    uf14: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF14'
    },
    ud14: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD14'
    },
    um14: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM14'
    },
    uo14: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO14'
    },
    ua14: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA14'
    },
    c251: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C251'
    },
    cf251: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF251'
    },
    cd251: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD251'
    },
    cm251: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM251'
    },
    co251: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO251'
    },
    ca251: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA251'
    },
    u25: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U25'
    },
    un25: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN25'
    },
    uf25: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF25'
    },
    ud25: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD25'
    },
    um25: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM25'
    },
    uo25: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO25'
    },
    ua25: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA25'
    },
    c261: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C261'
    },
    cf261: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF261'
    },
    cd261: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD261'
    },
    cm261: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM261'
    },
    co261: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO261'
    },
    ca261: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA261'
    },
    u26: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U26'
    },
    un26: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN26'
    },
    uf26: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF26'
    },
    ud26: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD26'
    },
    um26: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM26'
    },
    uo26: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO26'
    },
    ua26: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA26'
    },
    c271: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C271'
    },
    cf271: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF271'
    },
    cd271: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD271'
    },
    cm271: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM271'
    },
    co271: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO271'
    },
    ca271: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA271'
    },
    c272: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C272'
    },
    cf272: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF272'
    },
    cd272: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD272'
    },
    cm272: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM272'
    },
    co272: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO272'
    },
    ca272: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA272'
    },
    u27: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U27'
    },
    un27: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN27'
    },
    uf27: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF27'
    },
    ud27: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD27'
    },
    um27: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM27'
    },
    uo27: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO27'
    },
    ua27: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA27'
    },
    c281: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C281'
    },
    cf281: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF281'
    },
    cd281: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD281'
    },
    cm281: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM281'
    },
    co281: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO281'
    },
    ca281: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA281'
    },
    c282: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C282'
    },
    cf282: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF282'
    },
    cd282: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD282'
    },
    cm282: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM282'
    },
    co282: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO282'
    },
    ca282: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA282'
    },
    c283: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C283'
    },
    cf283: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF283'
    },
    cd283: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD283'
    },
    cm283: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM283'
    },
    co283: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO283'
    },
    ca283: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA283'
    },
    c284: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C284'
    },
    cf284: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF284'
    },
    cd284: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD284'
    },
    cm284: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM284'
    },
    co284: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO284'
    },
    ca284: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA284'
    },
    u28: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U28'
    },
    un28: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN28'
    },
    uf28: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF28'
    },
    ud28: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD28'
    },
    um28: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM28'
    },
    uo28: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO28'
    },
    ua28: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA28'
    }
  }, {
    sequelize,
    tableName: 'TabRel_1STUGEO_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
