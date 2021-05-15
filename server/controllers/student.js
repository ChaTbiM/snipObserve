const { getStudentsByGroupAndSpecialtyService } = require('../services/user')

async function getStudentsByGroupIdAndSpecialty(req, res) {
    const { groupId, specialtyCode } = req.params

    let response = {
        success: false,
        data: null,
        message: null,
    };

    try {
        const student = await getStudentsByGroupAndSpecialtyService(groupId, specialtyCode);

        if (student === null) {
            throw new Exception("student was not found")
        }

        response.data = student;
        response.success = true;
        response.message = "Student retrieved successfully"

        return res.json(response);
    } catch (error) {
        response.message = error.message;
        return res.json(response);
    }
}

const StudentController = {
    getStudentsByGroupIdAndSpecialty
}

module.exports = StudentController;