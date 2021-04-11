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