const { sequelize, models } = require("../database/db");


async function getAllSessionsByProfessorId(professorId) {

    const sessions = await sequelize.query(`SELECT S.id AS session_id,S.group_number, O.Code_fillière , C.Réf_Cours, C.Cours FROM Options O 
    INNER JOIN Cours C ON O.Code_fillière = C.FilièreEtude 
    INNER JOIN Sessions S ON S.class_id = C.Réf_Cours
    WHERE S.teacher_id = ${professorId}
    `, {
        raw: true
    });

    if (sessions) {
        return sessions;
    }
    return null;
}


const SessionsService = {
    getAllSessionsByProfessorId
}

module.exports = SessionsService;