const express = require('express')
const bcrypt = require("bcrypt");
let router = express.Router()
const {loginController} = require('../controllers/auth');

router.post('/login', loginController);


// Testing ..... ( remove later / or use them for Admin app ) 

router.get('/bcrypt', (req, res) => {
  const password = "password";
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return res.json(hashedPassword);
})

router.get('/check-crypted', async (req, res) => {
  const password = "password";
  const passwordHash = "$2b$10$BDJLRpMGJpZ4sMxTz122OeRzuVgyPjBdzAEtsYgGiVMPFiKGSSxpK";
  const match = await bcrypt.compare(password, passwordHash);
  if (match) {
    return res.json(true)

  }

  return res.json(false)

})


module.exports = router;
