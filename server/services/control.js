const { sequelize } = require("../database/db");


async function getControlsOfStudentService({ student_id, group_number, class_id, professorId }) {

    const controls = await sequelize.query(`SELECT * FROM Control C
                                                INNER JOIN Sessions S ON C.session_id = S.id 
                                                WHERE S.group_number = ${group_number}
                                                AND C.student_id = '${student_id}'
                                                AND S.class_id = '${class_id}'
                                                AND S.teacher_id = ${professorId};`);

    if (!controls) {
        return null;
    }

    return controls;
}

const ControlService = {
    getControlsOfStudentService
}

module.exports = ControlService;