const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel1StUmhAg1', {
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
    cd112: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD112'
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
    cd122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD122'
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
    cd151: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD151'
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
    cd152: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD152'
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
    un15: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN15'
    },
    uf15: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF15'
    },
    ud15: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD15'
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
    cd161: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD161'
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
    un16: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN16'
    },
    uf16: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF16'
    },
    ud16: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD16'
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
    cd291: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD291'
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
    cd292: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD292'
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
    un29: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN29'
    },
    uf29: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF29'
    },
    ud29: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD29'
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
    cd2101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD2101'
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
    un210: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN210'
    },
    uf210: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF210'
    },
    ud210: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD210'
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
    cd2111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD2111'
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
    un211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN211'
    },
    uf211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF211'
    },
    ud211: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD211'
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
    cd2121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD2121'
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
    cd2122: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD2122'
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
    un212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN212'
    },
    uf212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF212'
    },
    ud212: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD212'
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
    }
  }, {
    sequelize,
    tableName: 'TabRel_1STUmh_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
