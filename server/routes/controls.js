const express = require('express')
let router = express.Router()
const ControlController = require('../controllers/controls');


router.get('/controls/student/:student_id/class/:class_id/group/:group_number', ControlController.getControlsOfStudent);
router.get('/control/student/:student_id/session/:session_id', ControlController.getCurrentControlBySession);



module.exports = router;
