const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabCur3SnvaBA0', {
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
    c112: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C112'
    },
    cf112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF112'
    },
    cm112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM112'
    },
    co112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO112'
    },
    ca112: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA112'
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
    c252: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C252'
    },
    cf252: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF252'
    },
    cm252: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM252'
    },
    co252: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO252'
    },
    ca252: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA252'
    },
    c253: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C253'
    },
    cf253: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF253'
    },
    cm253: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM253'
    },
    co253: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO253'
    },
    ca253: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA253'
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
    c381: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C381'
    },
    cf381: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF381'
    },
    cm381: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM381'
    },
    co381: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO381'
    },
    ca381: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA381'
    },
    u38: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U38'
    },
    uf38: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF38'
    },
    um38: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM38'
    },
    uo38: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO38'
    },
    ua38: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA38'
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
    c5171: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5171'
    },
    cf5171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5171'
    },
    cm5171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5171'
    },
    co5171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5171'
    },
    ca5171: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5171'
    },
    c5172: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5172'
    },
    cf5172: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5172'
    },
    cm5172: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5172'
    },
    co5172: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5172'
    },
    ca5172: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5172'
    },
    u517: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U517'
    },
    uf517: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF517'
    },
    um517: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM517'
    },
    uo517: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO517'
    },
    ua517: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA517'
    },
    c5181: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5181'
    },
    cf5181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5181'
    },
    cm5181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5181'
    },
    co5181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5181'
    },
    ca5181: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5181'
    },
    c5182: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5182'
    },
    cf5182: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5182'
    },
    cm5182: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5182'
    },
    co5182: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5182'
    },
    ca5182: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5182'
    },
    u518: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U518'
    },
    uf518: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF518'
    },
    um518: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM518'
    },
    uo518: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO518'
    },
    ua518: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA518'
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
    c5193: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5193'
    },
    cf5193: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5193'
    },
    cm5193: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5193'
    },
    co5193: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5193'
    },
    ca5193: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5193'
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
    c6211: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6211'
    },
    cf6211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6211'
    },
    cm6211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6211'
    },
    co6211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6211'
    },
    ca6211: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6211'
    },
    c6212: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6212'
    },
    cf6212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6212'
    },
    cm6212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6212'
    },
    co6212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6212'
    },
    ca6212: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6212'
    },
    u621: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U621'
    },
    uf621: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF621'
    },
    um621: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM621'
    },
    uo621: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO621'
    },
    ua621: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA621'
    },
    c6221: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6221'
    },
    cf6221: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6221'
    },
    cm6221: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6221'
    },
    co6221: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6221'
    },
    ca6221: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6221'
    },
    u622: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U622'
    },
    uf622: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF622'
    },
    um622: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM622'
    },
    uo622: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO622'
    },
    ua622: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA622'
    },
    c6231: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6231'
    },
    cf6231: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6231'
    },
    cm6231: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6231'
    },
    co6231: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6231'
    },
    ca6231: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6231'
    },
    c6232: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6232'
    },
    cf6232: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6232'
    },
    cm6232: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6232'
    },
    co6232: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6232'
    },
    ca6232: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6232'
    },
    c6233: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6233'
    },
    cf6233: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6233'
    },
    cm6233: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6233'
    },
    co6233: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6233'
    },
    ca6233: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6233'
    },
    u623: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U623'
    },
    uf623: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF623'
    },
    um623: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM623'
    },
    uo623: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO623'
    },
    ua623: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA623'
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
    c6242: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6242'
    },
    cf6242: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6242'
    },
    cm6242: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6242'
    },
    co6242: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6242'
    },
    ca6242: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6242'
    },
    c6243: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6243'
    },
    cf6243: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6243'
    },
    cm6243: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6243'
    },
    co6243: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6243'
    },
    ca6243: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6243'
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
    tableName: 'TabCur_3SNVA_B_A_0',
    schema: 'dbo',
    timestamps: false
  });
};
