const { sequelize, models } = require("../database/db");


async function getAllSessionsByProfessorId(professorId) {

    const sessions = await sequelize.query(`SELECT S.id AS session_id, group_number,date_time, Année AS Annee, Nbre_Année AS Nbre_Annee , Fillière AS Specialty FROM Options O 
    INNER JOIN Cours C ON O.Code_fillière = C.FilièreEtude 
    INNER JOIN Sessions S ON S.class_id = C.Réf_Cours
    WHERE S.teacher_id = ${professorId} 
    ORDER BY group_number
    `);

    let sessionsBySpeciality = {};
    sessions[0].forEach((session) => {
        const specialtyCode = 'Specialty';
        const yearCode = "Annee";
        const numberOfYears = "Nbre_Annee";

        session.year = getYearFromYearCodeAndNumberOfYears(session[yearCode], session[numberOfYears])

        if(session[specialtyCode].toLowerCase().includes("tc")){
            const tcRegex = new RegExp("TC","i")
            session[specialtyCode] = session[specialtyCode].replace(tcRegex,"Tronc commun")  
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