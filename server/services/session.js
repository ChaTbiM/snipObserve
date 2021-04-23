const { sequelize, models } = require("../database/db");


async function getAllSessionsByProfessorId(professorId) {

    const sessions = await sequelize.query(`SELECT S.id AS session_id ,spécialité,S.group_number, AnnéeEtude AS AnneeEtude ,O.Code_fillière AS Code_filliere  , C.Réf_Cours, C.Cours FROM Options O 
    INNER JOIN Cours C ON O.Code_fillière = C.FilièreEtude 
    INNER JOIN Sessions S ON S.class_id = C.Réf_Cours
    WHERE S.teacher_id = ${professorId}
    ORDER BY spécialité , AnnéeEtude , S.group_number
    `, {
        raw: true
    });

    let sessionsBySpeciality = {};
    sessions[0].forEach((session) => {
        const specialityCode = 'Code_filliere';
        const year = "AnneeEtude";
        console.log('year', session[specialityCode]);
        if (sessionsBySpeciality[session[specialityCode]] && sessionsBySpeciality[session[specialityCode]][session[year]]) {
            return sessionsBySpeciality[session[specialityCode]][session[year]].push(session);
        } else {
            sessionsBySpeciality[session[specialityCode]] = {};
            sessionsBySpeciality[session[specialityCode]][session[year]] = [];

            return sessionsBySpeciality[session[specialityCode]][session[year]].push(session);
        }
    })

    return sessionsBySpeciality;
    if (sessions) {
        return sessions;
    }
    return null;
}


const SessionsService = {
    getAllSessionsByProfessorId
}

module.exports = SessionsService;