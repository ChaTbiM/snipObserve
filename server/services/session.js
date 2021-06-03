const { sequelize, models } = require("../database/db");


async function getAllSessionsByProfessorId(professorId) {
    let today = new Date(); // current date in ISO STRING FORMAT
    console.log('oldDate',today);

    today = new Date(today.setDate(today.getDate() - 2)).toISOString();
    console.log('newDate',today);

    const sessions = await sequelize.query(`
    SELECT S.class_id,rn, S.id AS session_id,C.Cours as module_name , group_number,date_time, Année AS Annee, Nbre_Année AS Nbre_Annee , Fillière AS Specialty FROM Options O 
    INNER JOIN Cours C ON O.Code_fillière = C.FilièreEtude 
    INNER JOIN (
                    SELECT * 
                    ,row_number() 
                    over (partition by class_id,group_number
                            order by date_time ASC) as rn
                    FROM Sessions
                    WHERE date_time >= '${today}'
                ) as S on S.class_id = C.Réf_Cours
    WHERE S.teacher_id = ${professorId} 
	AND rn = 1
    ORDER BY date_time ASC, group_number ASC;
    `);

    let sessionsBySpeciality = {};
    sessions[0].forEach((session) => {
        const specialtyCode = 'Specialty';
        const yearCode = "Annee";
        const numberOfYears = "Nbre_Annee";

        session.year = getYearFromYearCodeAndNumberOfYears(session[yearCode], session[numberOfYears])

        if (session[specialtyCode].toLowerCase().includes("tc")) {
            const tcRegex = new RegExp("TC", "i")
            session[specialtyCode] = session[specialtyCode].replace(tcRegex, "Tronc commun")
        }

        // Construct Organized DataStructure of Sessions
        if (sessionsBySpeciality[session[specialtyCode]]) {
            if (sessionsBySpeciality[session[specialtyCode]][session.year]) {
            } else {
                sessionsBySpeciality[session[specialtyCode]][session.year] = [];
            }
            sessionsBySpeciality[session[specialtyCode]][session.year].push(session)
        } else {
            sessionsBySpeciality[session[specialtyCode]] = {};
            sessionsBySpeciality[session[specialtyCode]][session.year] = [];
            sessionsBySpeciality[session[specialtyCode]][session.year].push(session)
        }
    })

    if (sessionsBySpeciality) {
        return sessionsBySpeciality;
    }
    return null;
}

function getYearFromYearCodeAndNumberOfYears(yearCode, numberOfYears) {
    const year = Number(yearCode[0]);
    if (numberOfYears === 2) {
        return year + 3;
    }
    return year;
}


const SessionsService = {
    getAllSessionsByProfessorId
}

module.exports = SessionsService;