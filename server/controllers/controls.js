const { getControlsOfStudentService , getCurrentControlBySessionService , updateControlService  } = require('../services/control')
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
 
async function getCurrentControlBySession(req,res){
    
    const { student_id, session_id } = req.params

    let response = {
        success: false,
        data: null,
        message: null,
    };

    try {
        const control = await getCurrentControlBySessionService(session_id,student_id);

        if (control === null) {
            throw new Exception("control was not found")
        }

        response.data = control;
        response.success = true;
        response.message = `Control with id ${control.id} retrieved successfully`

        return res.json(response);
    } catch (error) {
        response.message = error.message;
        return res.json(response);
    }
}

async function updateControl(req,res){
    const { control_id } = req.params
    const {absent , session_evaluation} = req.body

    let response = {
        success: false,
        data: null,
        message: null,
    };

    try {
         await updateControlService(control_id,absent,session_evaluation);

        if (control === null) {
            throw new Exception("control was not found")
        }

        response.data = "success";
        response.success = true;
        response.message = `Control with id ${control.id} updated successfully`

        return res.json(response);
    } catch (error) {
        response.message = error.message;
        return res.json(response);
    }
}

const ControlController = {
    getControlsOfStudent,
    getCurrentControlBySession,
    updateControl
}

module.exports = ControlController;