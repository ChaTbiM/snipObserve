const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabCur2StUmh0', {
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
    c161: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C161'
    },
    cf161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF161'
    },
    cm161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM161'
    },
    co161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO161'
    },
    ca161: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA161'
    },
    u16: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U16'
    },
    uf16: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF16'
    },
    um16: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM16'
    },
    uo16: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO16'
    },
    ua16: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA16'
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
    c2111: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C2111'
    },
    cf2111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF2111'
    },
    cm2111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM2111'
    },
    co2111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO2111'
    },
    ca2111: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA2111'
    },
    u211: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U211'
    },
    uf211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF211'
    },
    um211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM211'
    },
    uo211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO211'
    },
    ua211: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA211'
    },
    c2121: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C2121'
    },
    cf2121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF2121'
    },
    cm2121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM2121'
    },
    co2121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO2121'
    },
    ca2121: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA2121'
    },
    c2122: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C2122'
    },
    cf2122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF2122'
    },
    cm2122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM2122'
    },
    co2122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO2122'
    },
    ca2122: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA2122'
    },
    u212: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U212'
    },
    uf212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF212'
    },
    um212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM212'
    },
    uo212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO212'
    },
    ua212: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA212'
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
    c3161: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3161'
    },
    cf3161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3161'
    },
    cm3161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3161'
    },
    co3161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3161'
    },
    ca3161: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3161'
    },
    u316: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U316'
    },
    uf316: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF316'
    },
    um316: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM316'
    },
    uo316: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO316'
    },
    ua316: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA316'
    },
    c3171: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3171'
    },
    cf3171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3171'
    },
    cm3171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3171'
    },
    co3171: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3171'
    },
    ca3171: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3171'
    },
    c3172: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3172'
    },
    cf3172: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3172'
    },
    cm3172: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3172'
    },
    co3172: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3172'
    },
    ca3172: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3172'
    },
    u317: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U317'
    },
    uf317: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF317'
    },
    um317: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM317'
    },
    uo317: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO317'
    },
    ua317: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA317'
    },
    c3181: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C3181'
    },
    cf3181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF3181'
    },
    cm3181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM3181'
    },
    co3181: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO3181'
    },
    ca3181: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA3181'
    },
    u318: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U318'
    },
    uf318: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF318'
    },
    um318: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM318'
    },
    uo318: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO318'
    },
    ua318: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA318'
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
    c4191: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4191'
    },
    cf4191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4191'
    },
    cm4191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4191'
    },
    co4191: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4191'
    },
    ca4191: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4191'
    },
    u419: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U419'
    },
    uf419: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF419'
    },
    um419: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM419'
    },
    uo419: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO419'
    },
    ua419: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA419'
    },
    c4201: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4201'
    },
    cf4201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4201'
    },
    cm4201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4201'
    },
    co4201: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4201'
    },
    ca4201: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4201'
    },
    u420: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U420'
    },
    uf420: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF420'
    },
    um420: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM420'
    },
    uo420: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO420'
    },
    ua420: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA420'
    },
    c4211: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C4211'
    },
    cf4211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF4211'
    },
    cm4211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM4211'
    },
    co4211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO4211'
    },
    ca4211: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA4211'
    },
    u421: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U421'
    },
    uf421: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF421'
    },
    um421: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM421'
    },
    uo421: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO421'
    },
    ua421: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA421'
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
    tableName: 'TabCur_2STUmh_0',
    schema: 'dbo',
    timestamps: false
  });
};
