const { sequelize } = require("../database/db");


async function getControlsOfStudentService({ student_id, group_number, class_id, professorId }) {

    const today = new Date().toISOString(); // current date in ISO STRING FORMAT

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
    console.log('list of controls',controls);
    return controls;
}

async function getCurrentControlBySessionService(session_id,student_id){

    const control = await sequelize.query(`SELECT C.id,C.session_id , C.student_id , C.absent , C.session_evaluation, C.test_grade, S.date_time  FROM Control C 
    INNER JOIN Sessions S ON S.id = ${session_id}
    WHERE C.student_id = '${student_id}'
    AND C.session_id = ${session_id};`);

    if(!control || control[0].length == 0){
        const createdControl  = await sequelize.query(`INSERT INTO Control (session_id,student_id,absent,session_evaluation,test_grade) 
        VALUES 
        (${session_id},'${student_id}',0,0,0.0);`)
        return createdControl;
    }

    return control[0];
}

const ControlService = {
    getControlsOfStudentService,
    getCurrentControlBySessionService
}

module.exports = ControlService;