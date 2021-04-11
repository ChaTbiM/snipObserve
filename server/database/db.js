let db = {};

const DB_CONNECTION = `${process.env.DB_DIALECT}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

var initModels = require("./init-models");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB_CONNECTION);


var models = initModels(sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = models;



module.exports = db;
