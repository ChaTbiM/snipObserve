const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabAnnexe3SnvpA', {
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
    tableName: 'TabAnnexe_3SNVP_A',
    schema: 'dbo',
    timestamps: false
  });
};
