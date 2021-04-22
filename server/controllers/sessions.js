const SessionsService = require('../services/session');
const {getToken} = require('../services/auth');
const {getProfessorId} = require('../services/user')

async function getAllSessionsByProfessorId(req, res) {
    const { getAllSessionsByProfessorId } = SessionsService;

    let token = null;
    
    try {
        token = getToken(req.headers.authorization);  
    } catch (error) {
        res.status(401).json("you are not authorized");        
    }

    const professorId = getProfessorId(token);

    let response = {
        success: false,
        data: null,
        message: null,
    };

    try {
        const sessions = await getAllSessionsByProfessorId(professorId);

        if (sessions === null) {
            throw new Exception("no sessions was found")
        }

        response.data = sessions;
        response.success = true;
        response.message = "sessions retrieved successfully"

        return res.json(response);
    } catch (error) {
        response.message = error.message;
        return res.json(response);
    }
}

const SessionController = {
    getAllSessionsByProfessorId
}

module.exports = SessionController;