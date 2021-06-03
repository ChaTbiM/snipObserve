const { sequelize } = require("../database/db");


async function getControlsOfStudentService({ student_id, group_number, class_id, professorId }) {

    let today = (new Date())// current date in ISO STRING FORMAT

    today = (new Date(today.setDate(today.getDate() - 2)).toISOString()).split("T")[0];


    const controls = await sequelize.query(`SELECT * FROM Control C
                                                INNER JOIN Sessions S ON C.session_id = S.id 
                                                WHERE S.group_number = ${group_number}
                                                AND C.student_id = '${student_id}'
                                                AND S.class_id = '${class_id}'
                                                AND S.teacher_id = ${professorId}
                                                AND S.date_time < '${today}'  
                                                ORDER BY date_time DESC`);

    if (!controls) {
        return null;
    }

    return controls;
}

async function getCurrentControlBySessionService(session_id, student_id) {
    if (session_id == null && student_id == null) {
        return null;
    }

    const control = await sequelize.query(`SELECT C.id,C.session_id , C.absent , C.session_evaluation, C.test_grade, S.date_time  FROM Control C 
    INNER JOIN Sessions S ON S.id = ${session_id}
    WHERE C.student_id = '${student_id}'
    AND C.session_id = ${session_id};`);
    if (control[1] == 0 && session_id && student_id) {
        console.log(control, 'empty??')
        const createdControl = await sequelize.query(`INSERT INTO Control (session_id,student_id,absent,session_evaluation,test_grade) 
        VALUES 
        (${session_id},'${student_id}',0,0,0.0);`)
        return createdControl;
    }

    return control[0];

}

async function updateControlService(control_id, absent, session_evaluation) {
    if (control_id == null || absent == null || session_evaluation == null) {
        return null
    }

    const control = await sequelize.query(`UPDATE Control SET absent = ${absent} , session_evaluation = ${session_evaluation}
                                             WHERE id =${control_id};`)
                                             

    return true;
}

const ControlService = {
    getControlsOfStudentService,
    getCurrentControlBySessionService,
    updateControlService
}

module.exports = ControlService;