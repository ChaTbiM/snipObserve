const fs = require("fs");
const path = require("path");
const { Sequelize } = require('sequelize');
const DataTypes = Sequelize.DataTypes;

let db = {};


const DB_CONNECTION = `${process.env.DB_DIALECT}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const sequelize = new Sequelize(DB_CONNECTION);

// get all models paths
// const currentFile = path.basename(__filename);
const modelsDirectory = __dirname+"\\models";
const modelsPath = fs.readdirSync(modelsDirectory).filter((file) => {
  const returnFile =
    file.indexOf(".") !== 0 && file.slice(-3) === ".js";
  return returnFile;
});


//init models  -- loading models to seqeulize
modelsPath.forEach((modelPath) => {
  const location = String(modelPath);
  let filePath = String(path.join(modelsDirectory, location));
  const model = require(filePath)(sequelize, DataTypes);
});

// models associations
const models = sequelize.models;
Object.keys(models).forEach((model) => {
  db[model] = models[model];
  if (models[model].associate) models[model].associate(models);
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;