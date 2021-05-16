const { getControlsOfStudentService } = require('../services/control')
const {getProfessorId} = require('../services/user')
const {getToken} = require('../services/auth');


async function getControlsOfStudent(req, res) {

    let token = null;
    
    try {
        token = getToken(req.headers.authorization);  
    } catch (error) {
        res.status(401).json("you are not authorized");        
    }

    const professorId = getProfessorId(token);
    
    const { student_id, group_number , class_id } = req.params
    
    const controlRequest = {
        student_id,
        group_number,
        class_id,
        professorId
    }

    let response = {
        success: false,
        data: null,
        message: null,
    };

    try {
        const student = await getControlsOfStudentService(controlRequest);

        if (student === null) {
            throw new Exception("controls was not found")
        }

        response.data = student;
        response.success = true;
        response.message = "Controls retrieved successfully"

        return res.json(response);
    } catch (error) {
        response.message = error.message;
        return res.json(response);
    }
}

const ControlController = {
    getControlsOfStudent
}

module.exports = ControlController;