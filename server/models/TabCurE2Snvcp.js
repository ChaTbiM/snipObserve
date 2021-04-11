const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabCurE2Snvcp', {
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
    c151: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C151'
    },
    cf151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF151'
    },
    cm151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM151'
    },
    co151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO151'
    },
    ca151: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA151'
    },
    c152: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C152'
    },
    cf152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF152'
    },
    cm152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM152'
    },
    co152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO152'
    },
    ca152: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA152'
    },
    u15: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U15'
    },
    uf15: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF15'
    },
    um15: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM15'
    },
    uo15: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO15'
    },
    ua15: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA15'
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
    c262: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C262'
    },
    cf262: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF262'
    },
    cm262: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM262'
    },
    co262: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO262'
    },
    ca262: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA262'
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
    c273: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C273'
    },
    cf273: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF273'
    },
    cm273: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM273'
    },
    co273: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO273'
    },
    ca273: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA273'
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
    c291: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C291'
    },
    cf291: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF291'
    },
    cm291: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM291'
    },
    co291: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO291'
    },
    ca291: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA291'
    },
    c292: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C292'
    },
    cf292: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF292'
    },
    cm292: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM292'
    },
    co292: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO292'
    },
    ca292: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA292'
    },
    u29: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U29'
    },
    uf29: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF29'
    },
    um29: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM29'
    },
    uo29: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO29'
    },
    ua29: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA29'
    },
    c2101: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C2101'
    },
    cf2101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF2101'
    },
    cm2101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM2101'
    },
    co2101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO2101'
    },
    ca2101: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA2101'
    },
    c2102: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C2102'
    },
    cf2102: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF2102'
    },
    cm2102: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM2102'
    },
    co2102: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO2102'
    },
    ca2102: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA2102'
    },
    u210: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U210'
    },
    uf210: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF210'
    },
    um210: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM210'
    },
    uo210: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO210'
    },
    ua210: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA210'
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
    c3113: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3113'
    },
    cf3113: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3113'
    },
    cm3113: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3113'
    },
    co3113: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3113'
    },
    ca3113: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3113'
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
    c3141: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3141'
    },
    cf3141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3141'
    },
    cm3141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3141'
    },
    co3141: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3141'
    },
    ca3141: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3141'
    },
    c3142: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3142'
    },
    cf3142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3142'
    },
    cm3142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3142'
    },
    co3142: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3142'
    },
    ca3142: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3142'
    },
    u314: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U314'
    },
    uf314: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF314'
    },
    um314: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM314'
    },
    uo314: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO314'
    },
    ua314: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA314'
    },
    c3151: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3151'
    },
    cf3151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3151'
    },
    cm3151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3151'
    },
    co3151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3151'
    },
    ca3151: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3151'
    },
    c3152: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3152'
    },
    cf3152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3152'
    },
    cm3152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3152'
    },
    co3152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3152'
    },
    ca3152: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3152'
    },
    u315: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U315'
    },
    uf315: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF315'
    },
    um315: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM315'
    },
    uo315: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO315'
    },
    ua315: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA315'
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
    }
  }, {
    sequelize,
    tableName: 'TabCurE_2SNVCP',
    schema: 'dbo',
    timestamps: false
  });
};
