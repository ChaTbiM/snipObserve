const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabCur3Stuga0', {
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
    s1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: '_S1'
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
    uf11: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF11'
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
    uf12: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF12'
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
    uf13: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF13'
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
    uf14: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF14'
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
    so1: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'SO1'
    },
    mg1: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'MG1'
    },
    s2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: '_S2'
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
    uf25: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF25'
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
    uf26: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF26'
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
    uf27: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF27'
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
    uf28: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF28'
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
    },
    so2: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'SO2'
    },
    mg2: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'MG2'
    },
    s3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: '_S3'
    },
    c391: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C391'
    },
    cf391: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF391'
    },
    cm391: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM391'
    },
    co391: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO391'
    },
    ca391: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA391'
    },
    c392: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C392'
    },
    cf392: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF392'
    },
    cm392: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM392'
    },
    co392: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO392'
    },
    ca392: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA392'
    },
    u39: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U39'
    },
    uf39: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF39'
    },
    um39: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM39'
    },
    uo39: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO39'
    },
    ua39: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA39'
    },
    c3101: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3101'
    },
    cf3101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3101'
    },
    cm3101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3101'
    },
    co3101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3101'
    },
    ca3101: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3101'
    },
    c3102: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3102'
    },
    cf3102: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3102'
    },
    cm3102: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3102'
    },
    co3102: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3102'
    },
    ca3102: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3102'
    },
    u310: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U310'
    },
    uf310: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF310'
    },
    um310: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM310'
    },
    uo310: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO310'
    },
    ua310: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA310'
    },
    c3111: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3111'
    },
    cf3111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3111'
    },
    cm3111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3111'
    },
    co3111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3111'
    },
    ca3111: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3111'
    },
    c3112: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3112'
    },
    cf3112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3112'
    },
    cm3112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3112'
    },
    co3112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3112'
    },
    ca3112: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3112'
    },
    u311: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U311'
    },
    uf311: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF311'
    },
    um311: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM311'
    },
    uo311: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO311'
    },
    ua311: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA311'
    },
    c3121: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3121'
    },
    cf3121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3121'
    },
    cm3121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3121'
    },
    co3121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3121'
    },
    ca3121: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3121'
    },
    c3122: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3122'
    },
    cf3122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3122'
    },
    cm3122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3122'
    },
    co3122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3122'
    },
    ca3122: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3122'
    },
    u312: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U312'
    },
    uf312: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF312'
    },
    um312: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM312'
    },
    uo312: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO312'
    },
    ua312: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA312'
    },
    so3: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'SO3'
    },
    mg3: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'MG3'
    },
    s4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: '_S4'
    },
    c4131: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4131'
    },
    cf4131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4131'
    },
    cm4131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4131'
    },
    co4131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4131'
    },
    ca4131: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4131'
    },
    c4132: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4132'
    },
    cf4132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4132'
    },
    cm4132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4132'
    },
    co4132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4132'
    },
    ca4132: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4132'
    },
    c4133: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4133'
    },
    cf4133: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4133'
    },
    cm4133: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4133'
    },
    co4133: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4133'
    },
    ca4133: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4133'
    },
    u413: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U413'
    },
    uf413: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF413'
    },
    um413: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM413'
    },
    uo413: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO413'
    },
    ua413: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA413'
    },
    c4141: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4141'
    },
    cf4141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4141'
    },
    cm4141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4141'
    },
    co4141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4141'
    },
    ca4141: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4141'
    },
    c4142: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4142'
    },
    cf4142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4142'
    },
    cm4142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4142'
    },
    co4142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4142'
    },
    ca4142: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4142'
    },
    u414: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U414'
    },
    uf414: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF414'
    },
    um414: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM414'
    },
    uo414: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO414'
    },
    ua414: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA414'
    },
    c4151: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4151'
    },
    cf4151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4151'
    },
    cm4151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4151'
    },
    co4151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4151'
    },
    ca4151: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4151'
    },
    c4152: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4152'
    },
    cf4152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4152'
    },
    cm4152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4152'
    },
    co4152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4152'
    },
    ca4152: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4152'
    },
    u415: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U415'
    },
    uf415: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF415'
    },
    um415: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM415'
    },
    uo415: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO415'
    },
    ua415: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA415'
    },
    c4161: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4161'
    },
    cf4161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4161'
    },
    cm4161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4161'
    },
    co4161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4161'
    },
    ca4161: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4161'
    },
    u416: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U416'
    },
    uf416: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF416'
    },
    um416: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM416'
    },
    uo416: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO416'
    },
    ua416: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA416'
    },
    c4171: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4171'
    },
    cf4171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4171'
    },
    cm4171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4171'
    },
    co4171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4171'
    },
    ca4171: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4171'
    },
    u417: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U417'
    },
    uf417: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF417'
    },
    um417: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM417'
    },
    uo417: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO417'
    },
    ua417: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA417'
    },
    c4181: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4181'
    },
    cf4181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4181'
    },
    cm4181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4181'
    },
    co4181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4181'
    },
    ca4181: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4181'
    },
    u418: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U418'
    },
    uf418: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF418'
    },
    um418: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM418'
    },
    uo418: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO418'
    },
    ua418: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA418'
    },
    so4: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'SO4'
    },
    mg4: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'MG4'
    },
    s5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: '_S5'
    },
    c5191: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5191'
    },
    cf5191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5191'
    },
    cm5191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5191'
    },
    co5191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5191'
    },
    ca5191: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5191'
    },
    c5192: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5192'
    },
    cf5192: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5192'
    },
    cm5192: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5192'
    },
    co5192: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5192'
    },
    ca5192: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5192'
    },
    u519: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U519'
    },
    uf519: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF519'
    },
    um519: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM519'
    },
    uo519: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO519'
    },
    ua519: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA519'
    },
    c5201: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5201'
    },
    cf5201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5201'
    },
    cm5201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5201'
    },
    co5201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5201'
    },
    ca5201: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5201'
    },
    c5202: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5202'
    },
    cf5202: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5202'
    },
    cm5202: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5202'
    },
    co5202: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5202'
    },
    ca5202: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5202'
    },
    u520: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U520'
    },
    uf520: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF520'
    },
    um520: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM520'
    },
    uo520: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO520'
    },
    ua520: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA520'
    },
    c5211: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5211'
    },
    cf5211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5211'
    },
    cm5211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5211'
    },
    co5211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5211'
    },
    ca5211: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5211'
    },
    u521: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U521'
    },
    uf521: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF521'
    },
    um521: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM521'
    },
    uo521: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO521'
    },
    ua521: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA521'
    },
    c5221: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5221'
    },
    cf5221: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5221'
    },
    cm5221: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5221'
    },
    co5221: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5221'
    },
    ca5221: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5221'
    },
    u522: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U522'
    },
    uf522: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF522'
    },
    um522: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM522'
    },
    uo522: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO522'
    },
    ua522: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA522'
    },
    c5231: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5231'
    },
    cf5231: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5231'
    },
    cm5231: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5231'
    },
    co5231: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5231'
    },
    ca5231: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5231'
    },
    u523: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U523'
    },
    uf523: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF523'
    },
    um523: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM523'
    },
    uo523: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO523'
    },
    ua523: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA523'
    },
    so5: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'SO5'
    },
    mg5: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'MG5'
    },
    s6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: '_S6'
    },
    c6241: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6241'
    },
    cf6241: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6241'
    },
    cm6241: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6241'
    },
    co6241: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6241'
    },
    ca6241: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6241'
    },
    u624: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U624'
    },
    uf624: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF624'
    },
    um624: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM624'
    },
    uo624: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO624'
    },
    ua624: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA624'
    },
    c6251: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6251'
    },
    cf6251: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6251'
    },
    cm6251: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6251'
    },
    co6251: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6251'
    },
    ca6251: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6251'
    },
    c6252: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6252'
    },
    cf6252: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6252'
    },
    cm6252: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6252'
    },
    co6252: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6252'
    },
    ca6252: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6252'
    },
    u625: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U625'
    },
    uf625: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF625'
    },
    um625: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM625'
    },
    uo625: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO625'
    },
    ua625: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA625'
    },
    c6261: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6261'
    },
    cf6261: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6261'
    },
    cm6261: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6261'
    },
    co6261: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6261'
    },
    ca6261: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6261'
    },
    c6262: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6262'
    },
    cf6262: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6262'
    },
    cm6262: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6262'
    },
    co6262: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6262'
    },
    ca6262: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6262'
    },
    u626: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U626'
    },
    uf626: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF626'
    },
    um626: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM626'
    },
    uo626: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO626'
    },
    ua626: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA626'
    },
    c6271: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6271'
    },
    cf6271: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6271'
    },
    cm6271: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6271'
    },
    co6271: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6271'
    },
    ca6271: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6271'
    },
    c6272: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6272'
    },
    cf6272: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6272'
    },
    cm6272: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6272'
    },
    co6272: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6272'
    },
    ca6272: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6272'
    },
    u627: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U627'
    },
    uf627: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF627'
    },
    um627: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM627'
    },
    uo627: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO627'
    },
    ua627: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA627'
    },
    c6281: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6281'
    },
    cf6281: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6281'
    },
    cm6281: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6281'
    },
    co6281: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6281'
    },
    ca6281: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6281'
    },
    u628: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U628'
    },
    uf628: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF628'
    },
    um628: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM628'
    },
    uo628: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO628'
    },
    ua628: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA628'
    },
    c6291: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6291'
    },
    cf6291: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6291'
    },
    cm6291: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6291'
    },
    co6291: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6291'
    },
    ca6291: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6291'
    },
    u629: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U629'
    },
    uf629: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF629'
    },
    um629: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM629'
    },
    uo629: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO629'
    },
    ua629: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA629'
    },
    c6301: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6301'
    },
    cf6301: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6301'
    },
    cm6301: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6301'
    },
    co6301: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6301'
    },
    ca6301: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6301'
    },
    u630: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U630'
    },
    uf630: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF630'
    },
    um630: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM630'
    },
    uo630: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO630'
    },
    ua630: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA630'
    },
    so6: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'SO6'
    },
    mg6: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'MG6'
    }
  }, {
    sequelize,
    tableName: 'TabCur_3STUGA_0',
    schema: 'dbo',
    timestamps: false
  });
};
