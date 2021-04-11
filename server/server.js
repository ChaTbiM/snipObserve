const env = process.env.NODE_ENV || "production";
require("dotenv").config({ path: `${env}.env` });

// Server initialization and config
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())


// Routes
const { authRoutes } = require('./routes/index.js');

app.use('/', authRoutes);



const { sequelize, models } = require('./database/db');

// const quickOp = async () => {
//   const professor = await models['Enseignants'].findOne({ where: { refEnseignant: 2 } });

//   professor.pwdEnseignant = '$2b$10$I.qE.63koIG2rbcKJlJv3umYfKoK4NlDSFhlZyNnyXcF85jNprera';
//   await professor.save();

// }
// quickOp();


// Starting the app
app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });   // Use Only when you CREATE / UPDATE  MODELS
    console.log('Connection has been established successfully.');
    // await sequelize.drop();

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})