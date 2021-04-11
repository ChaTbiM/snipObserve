const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TabAnnexe2StUmh', {
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
    tableName: 'TabAnnexe_2STUmh',
    schema: 'dbo',
    timestamps: false
  });
};
