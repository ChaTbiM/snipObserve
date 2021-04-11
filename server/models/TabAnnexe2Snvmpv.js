const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabAnnexe2Snvmpv', {
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
    tableName: 'TabAnnexe_2SNVMPV',
    schema: 'dbo',
    timestamps: false
  });
};
