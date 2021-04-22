const SessionsService = require('../services/session');

async function getAllSessionsByProfessorId(req, res) {
    const { getAllSessionsByProfessorId } = SessionsService;
    const { id } = req.body;

    let response = {
        success: false,
        data: null,
        message: null,
    };

    try {
        const sessions = await getAllSessionsByProfessorId(id);

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