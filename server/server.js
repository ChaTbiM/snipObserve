const express = require('express');
const bodyParser = require('body-parser');


const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `${env}.env` });

const app = express()
const port = 3000;


app.use(bodyParser.json({ type: 'application/*+json' }))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
  res.send('login page!')

});

app.get('/signup',(req,res)=>{
    res.send('signup page!')

});


const {sequelize,User} = require('./database/db');
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