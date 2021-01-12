const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

const app = express()
const port = 3000

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

// DAtabase connection :: 
const DB_CONNECTION = `mssql://root:root@localhost:1433/snip_observer`;
const sequelize = new Sequelize(DB_CONNECTION);


app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})