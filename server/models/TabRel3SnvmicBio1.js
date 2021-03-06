const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabRel3SnvmicBio1', {
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
    c523: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C523'
    },
    cf523: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF523'
    },
    cd523: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD523'
    },
    cm523: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM523'
    },
    co523: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO523'
    },
    ca523: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA523'
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
    c533: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C533'
    },
    cf533: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF533'
    },
    cd533: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD533'
    },
    cm533: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM533'
    },
    co533: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO533'
    },
    ca533: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA533'
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
    c641: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C641'
    },
    cf641: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF641'
    },
    cd641: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD641'
    },
    cm641: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM641'
    },
    co641: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO641'
    },
    ca641: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA641'
    },
    c642: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C642'
    },
    cf642: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF642'
    },
    cd642: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD642'
    },
    cm642: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM642'
    },
    co642: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO642'
    },
    ca642: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA642'
    },
    c643: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C643'
    },
    cf643: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF643'
    },
    cd643: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD643'
    },
    cm643: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM643'
    },
    co643: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO643'
    },
    ca643: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA643'
    },
    u64: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: '_U64'
    },
    un64: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UN64'
    },
    uf64: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UF64'
    },
    ud64: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UD64'
    },
    um64: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UM64'
    },
    uo64: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'UO64'
    },
    ua64: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UA64'
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
    c662: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C662'
    },
    cf662: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF662'
    },
    cd662: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD662'
    },
    cm662: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM662'
    },
    co662: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO662'
    },
    ca662: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA662'
    },
    c663: {
      type: DataTypes.STRING(130),
      allowNull: true,
      field: '_C663'
    },
    cf663: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CF663'
    },
    cd663: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CD663'
    },
    cm663: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CM663'
    },
    co663: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CO663'
    },
    ca663: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'CA663'
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
    }
  }, {
    sequelize,
    tableName: 'TabRel_3SNVMIC__BIO1',
    schema: 'dbo',
    timestamps: false
  });
};
