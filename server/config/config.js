const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `${env}.env` });

const generateConfig = () => {
  return {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
}

module.exports = {
  development: generateConfig(),
  test: generateConfig(),
  production: generateConfig(),
};
