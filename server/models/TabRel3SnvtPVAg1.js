const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel3SnvtPVAg1', {
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
    c511: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C511'
    },
    cf511: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF511'
    },
    cd511: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD511'
    },
    cm511: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM511'
    },
    co511: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO511'
    },
    ca511: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA511'
    },
    c512: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C512'
    },
    cf512: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF512'
    },
    cd512: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD512'
    },
    cm512: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM512'
    },
    co512: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO512'
    },
    ca512: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA512'
    },
    u51: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U51'
    },
    un51: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN51'
    },
    uf51: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF51'
    },
    ud51: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD51'
    },
    um51: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM51'
    },
    uo51: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO51'
    },
    ua51: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA51'
    },
    c521: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C521'
    },
    cf521: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF521'
    },
    cd521: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD521'
    },
    cm521: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM521'
    },
    co521: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO521'
    },
    ca521: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA521'
    },
    c522: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C522'
    },
    cf522: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF522'
    },
    cd522: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD522'
    },
    cm522: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM522'
    },
    co522: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO522'
    },
    ca522: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA522'
    },
    u52: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U52'
    },
    un52: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN52'
    },
    uf52: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF52'
    },
    ud52: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD52'
    },
    um52: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM52'
    },
    uo52: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO52'
    },
    ua52: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA52'
    },
    c531: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C531'
    },
    cf531: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF531'
    },
    cd531: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD531'
    },
    cm531: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM531'
    },
    co531: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO531'
    },
    ca531: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA531'
    },
    c532: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C532'
    },
    cf532: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF532'
    },
    cd532: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD532'
    },
    cm532: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM532'
    },
    co532: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO532'
    },
    ca532: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA532'
    },
    u53: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U53'
    },
    un53: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN53'
    },
    uf53: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF53'
    },
    ud53: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD53'
    },
    um53: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM53'
    },
    uo53: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO53'
    },
    ua53: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA53'
    },
    c541: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C541'
    },
    cf541: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF541'
    },
    cd541: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD541'
    },
    cm541: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM541'
    },
    co541: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO541'
    },
    ca541: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA541'
    },
    u54: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U54'
    },
    un54: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN54'
    },
    uf54: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF54'
    },
    ud54: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD54'
    },
    um54: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM54'
    },
    uo54: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO54'
    },
    ua54: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA54'
    },
    c651: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C651'
    },
    cf651: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF651'
    },
    cd651: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD651'
    },
    cm651: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM651'
    },
    co651: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO651'
    },
    ca651: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA651'
    },
    c652: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C652'
    },
    cf652: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF652'
    },
    cd652: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD652'
    },
    cm652: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM652'
    },
    co652: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO652'
    },
    ca652: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA652'
    },
    c653: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C653'
    },
    cf653: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF653'
    },
    cd653: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD653'
    },
    cm653: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM653'
    },
    co653: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO653'
    },
    ca653: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA653'
    },
    u65: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U65'
    },
    un65: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN65'
    },
    uf65: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF65'
    },
    ud65: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD65'
    },
    um65: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM65'
    },
    uo65: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO65'
    },
    ua65: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA65'
    },
    c661: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C661'
    },
    cf661: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF661'
    },
    cd661: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD661'
    },
    cm661: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM661'
    },
    co661: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO661'
    },
    ca661: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA661'
    },
    u66: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U66'
    },
    un66: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN66'
    },
    uf66: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF66'
    },
    ud66: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD66'
    },
    um66: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM66'
    },
    uo66: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO66'
    },
    ua66: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA66'
    },
    c671: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C671'
    },
    cf671: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF671'
    },
    cd671: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD671'
    },
    cm671: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM671'
    },
    co671: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO671'
    },
    ca671: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA671'
    },
    c672: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C672'
    },
    cf672: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF672'
    },
    cd672: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD672'
    },
    cm672: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM672'
    },
    co672: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO672'
    },
    ca672: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA672'
    },
    u67: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U67'
    },
    un67: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN67'
    },
    uf67: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF67'
    },
    ud67: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD67'
    },
    um67: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM67'
    },
    uo67: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO67'
    },
    ua67: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA67'
    },
    c681: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C681'
    },
    cf681: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF681'
    },
    cd681: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD681'
    },
    cm681: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM681'
    },
    co681: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO681'
    },
    ca681: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA681'
    },
    c682: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C682'
    },
    cf682: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF682'
    },
    cd682: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD682'
    },
    cm682: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM682'
    },
    co682: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO682'
    },
    ca682: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA682'
    },
    u68: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U68'
    },
    un68: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN68'
    },
    uf68: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF68'
    },
    ud68: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD68'
    },
    um68: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM68'
    },
    uo68: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO68'
    },
    ua68: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA68'
    }
  }, {
    sequelize,
    tableName: 'TabRel_3SNVT_P_V_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
