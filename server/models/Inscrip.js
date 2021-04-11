const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Inscrip', {
    idi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    nIns: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'N°Ins'
    },
    au: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    dateins: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    reg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cycleEtude: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'CycleEtude'
    },
    anneeEtude: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'AnnéeEtude'
    },
    filiereEtude: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'FilièreEtude'
    },
    anneeCycle: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'AnnéeCycle'
    },
    moy1SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy1SemS1'
    },
    moy2SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy2SemS1'
    },
    moy3SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy3SemS1'
    },
    moy4SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy4SemS1'
    },
    moy5SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy5SemS1'
    },
    moy6SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy6SemS1'
    },
    moy1SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy1SemS2'
    },
    moy2SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy2SemS2'
    },
    moy3SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy3SemS2'
    },
    moy4SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy4SemS2'
    },
    moy5SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy5SemS2'
    },
    moy6SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy6SemS2'
    },
    moy1Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy1Sem'
    },
    moy2Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy2Sem'
    },
    moy3Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy3Sem'
    },
    moy4Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy4Sem'
    },
    moy5Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy5Sem'
    },
    moy6Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Moy6Sem'
    },
    credS11: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CrédS11'
    },
    cred1SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd1SemS1'
    },
    cred2SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd2SemS1'
    },
    cred3SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd3SemS1'
    },
    cred4SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd4SemS1'
    },
    cred5SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd5SemS1'
    },
    cred6SemS1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd6SemS1'
    },
    cred1SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd1SemS2'
    },
    cred2SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd2SemS2'
    },
    cred3SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd3SemS2'
    },
    cred4SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd4SemS2'
    },
    cred5SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd5SemS2'
    },
    cred6SemS2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd6SemS2'
    },
    cred1Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd1Sem'
    },
    cred2Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd2Sem'
    },
    cred3Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd3Sem'
    },
    cred4Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd4Sem'
    },
    cred5Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd5Sem'
    },
    cred6Sem: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'Créd6Sem'
    },
    moyGl1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MoyGL1'
    },
    moyGl2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MoyGL2'
    },
    moyGl3: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'MoyGL3'
    },
    credGl1: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CrédGL1'
    },
    credGl2: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CrédGL2'
    },
    credGl3: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      field: 'CrédGL3'
    },
    obs1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    obs2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    obs3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sesS1: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SesS1'
    },
    sesS2: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SesS2'
    },
    sesS3: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SesS3'
    },
    sesS4: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SesS4'
    },
    sesS5: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SesS5'
    },
    sesS6: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'SesS6'
    },
    session2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dette: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    doublon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    obslast: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    valid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    us: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    e1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -40
    },
    e2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -40
    },
    e3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -40
    }
  }, {
    sequelize,
    tableName: 'inscrip',
    schema: 'dbo',
    timestamps: false
  });
};
