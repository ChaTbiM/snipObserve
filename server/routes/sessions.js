const express = require('express')
let router = express.Router()
const  SessionController = require('../controllers/sessions');


router.get('/sessions',SessionController.getAllSessionsByProfessorId);


module.exports = router;
