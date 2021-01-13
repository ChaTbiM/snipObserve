const express = require('express')
let router = express.Router()

router.post('/login',function (req,res){
  res.send('login page!')
});

router.post('/signup',(req,res)=>{
    res.send('signup page!')
});

  
module.exports = router;
