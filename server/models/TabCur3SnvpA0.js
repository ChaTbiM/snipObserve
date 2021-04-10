const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabCur3SnvpA0', {
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
    c382: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C382'
    },
    cf382: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF382'
    },
    cm382: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM382'
    },
    co382: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO382'
    },
    ca382: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA382'
    },
    c383: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C383'
    },
    cf383: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF383'
    },
    cm383: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM383'
    },
    co383: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO383'
    },
    ca383: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA383'
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
    c4111: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4111'
    },
    cf4111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4111'
    },
    cm4111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4111'
    },
    co4111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4111'
    },
    ca4111: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4111'
    },
    c4112: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4112'
    },
    cf4112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4112'
    },
    cm4112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4112'
    },
    co4112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4112'
    },
    ca4112: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4112'
    },
    u411: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U411'
    },
    uf411: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF411'
    },
    um411: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM411'
    },
    uo411: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO411'
    },
    ua411: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA411'
    },
    c4121: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4121'
    },
    cf4121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4121'
    },
    cm4121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4121'
    },
    co4121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4121'
    },
    ca4121: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4121'
    },
    c4122: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4122'
    },
    cf4122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4122'
    },
    cm4122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4122'
    },
    co4122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4122'
    },
    ca4122: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4122'
    },
    u412: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U412'
    },
    uf412: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF412'
    },
    um412: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM412'
    },
    uo412: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO412'
    },
    ua412: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA412'
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
    c5151: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5151'
    },
    cf5151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5151'
    },
    cm5151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5151'
    },
    co5151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5151'
    },
    ca5151: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5151'
    },
    u515: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U515'
    },
    uf515: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF515'
    },
    um515: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM515'
    },
    uo515: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO515'
    },
    ua515: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA515'
    },
    c5161: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5161'
    },
    cf5161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5161'
    },
    cm5161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5161'
    },
    co5161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5161'
    },
    ca5161: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5161'
    },
    c5162: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C5162'
    },
    cf5162: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF5162'
    },
    cm5162: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM5162'
    },
    co5162: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO5162'
    },
    ca5162: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA5162'
    },
    u516: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U516'
    },
    uf516: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF516'
    },
    um516: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM516'
    },
    uo516: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO516'
    },
    ua516: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA516'
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
    c6191: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6191'
    },
    cf6191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6191'
    },
    cm6191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6191'
    },
    co6191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6191'
    },
    ca6191: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6191'
    },
    u619: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U619'
    },
    uf619: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF619'
    },
    um619: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM619'
    },
    uo619: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO619'
    },
    ua619: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA619'
    },
    c6201: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6201'
    },
    cf6201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6201'
    },
    cm6201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6201'
    },
    co6201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6201'
    },
    ca6201: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6201'
    },
    c6202: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6202'
    },
    cf6202: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6202'
    },
    cm6202: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6202'
    },
    co6202: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6202'
    },
    ca6202: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6202'
    },
    u620: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U620'
    },
    uf620: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF620'
    },
    um620: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM620'
    },
    uo620: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO620'
    },
    ua620: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA620'
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
    tableName: 'TabCur_3SNVP_A_0',
    schema: 'dbo',
    timestamps: false
  });
};
