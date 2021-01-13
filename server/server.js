const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `${env}.env` });

// Server initialization and config
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json())


// Routes
const {authRoutes} = require('./routes/index.js');

app.get('/', (req, res) => { res.send('Hello World!') })

app.use('/',authRoutes);

// Database
const {sequelize} = require('./database/db');



// Starting the app
app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // await sequelize.sync({ force: true });
    // await sequelize.drop();

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})