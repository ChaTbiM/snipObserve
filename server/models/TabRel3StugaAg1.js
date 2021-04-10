const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel3StugaAg1', {
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
    c551: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C551'
    },
    cf551: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF551'
    },
    cd551: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD551'
    },
    cm551: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM551'
    },
    co551: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO551'
    },
    ca551: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA551'
    },
    u55: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U55'
    },
    un55: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN55'
    },
    uf55: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF55'
    },
    ud55: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD55'
    },
    um55: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM55'
    },
    uo55: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO55'
    },
    ua55: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA55'
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
    },
    c691: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C691'
    },
    cf691: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF691'
    },
    cd691: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD691'
    },
    cm691: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM691'
    },
    co691: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO691'
    },
    ca691: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA691'
    },
    c692: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C692'
    },
    cf692: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF692'
    },
    cd692: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD692'
    },
    cm692: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM692'
    },
    co692: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO692'
    },
    ca692: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA692'
    },
    u69: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U69'
    },
    un69: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN69'
    },
    uf69: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF69'
    },
    ud69: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD69'
    },
    um69: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM69'
    },
    uo69: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO69'
    },
    ua69: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA69'
    },
    c6101: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6101'
    },
    cf6101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6101'
    },
    cd6101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD6101'
    },
    cm6101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6101'
    },
    co6101: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6101'
    },
    ca6101: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6101'
    },
    u610: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U610'
    },
    un610: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN610'
    },
    uf610: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF610'
    },
    ud610: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD610'
    },
    um610: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM610'
    },
    uo610: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO610'
    },
    ua610: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA610'
    },
    c6111: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6111'
    },
    cf6111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6111'
    },
    cd6111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD6111'
    },
    cm6111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6111'
    },
    co6111: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6111'
    },
    ca6111: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6111'
    },
    u611: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U611'
    },
    un611: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN611'
    },
    uf611: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF611'
    },
    ud611: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD611'
    },
    um611: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM611'
    },
    uo611: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO611'
    },
    ua611: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA611'
    },
    c6121: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C6121'
    },
    cf6121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF6121'
    },
    cd6121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD6121'
    },
    cm6121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM6121'
    },
    co6121: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO6121'
    },
    ca6121: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA6121'
    },
    u612: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U612'
    },
    un612: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN612'
    },
    uf612: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF612'
    },
    ud612: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD612'
    },
    um612: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM612'
    },
    uo612: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO612'
    },
    ua612: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA612'
    }
  }, {
    sequelize,
    tableName: 'TabRel_3STUGA_AG1',
    schema: 'dbo',
    timestamps: false
  });
};
