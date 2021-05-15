const express = require('express')
let router = express.Router()
const StudentController = require('../controllers/student');


router.get('/students/:groupId/specialty/:specialtyCode', StudentController.getStudentsByGroupIdAndSpecialty);


module.exports = router;
