const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabCur2SnvbioA1', {
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
    tableName: 'TabCur_2SNVBIO_A_1',
    schema: 'dbo',
    timestamps: false
  });
};
