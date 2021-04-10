const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabCur2Snvmpv0', {
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
    c113: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C113'
    },
    cf113: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF113'
    },
    cm113: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM113'
    },
    co113: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO113'
    },
    ca113: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA113'
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
    c122: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C122'
    },
    cf122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF122'
    },
    cm122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM122'
    },
    co122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO122'
    },
    ca122: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA122'
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
    c241: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C241'
    },
    cf241: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF241'
    },
    cm241: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM241'
    },
    co241: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO241'
    },
    ca241: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA241'
    },
    c242: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C242'
    },
    cf242: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF242'
    },
    cm242: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM242'
    },
    co242: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO242'
    },
    ca242: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA242'
    },
    c243: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C243'
    },
    cf243: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF243'
    },
    cm243: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM243'
    },
    co243: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO243'
    },
    ca243: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA243'
    },
    u24: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U24'
    },
    uf24: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF24'
    },
    um24: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM24'
    },
    uo24: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO24'
    },
    ua24: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA24'
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
    c3131: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3131'
    },
    cf3131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3131'
    },
    cm3131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3131'
    },
    co3131: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3131'
    },
    ca3131: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3131'
    },
    c3132: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3132'
    },
    cf3132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3132'
    },
    cm3132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3132'
    },
    co3132: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3132'
    },
    ca3132: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3132'
    },
    u313: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U313'
    },
    uf313: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF313'
    },
    um313: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM313'
    },
    uo313: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO313'
    },
    ua313: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA313'
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
    }
  }, {
    sequelize,
    tableName: 'TabCur_2SNVMPV_0',
    schema: 'dbo',
    timestamps: false
  });
};
