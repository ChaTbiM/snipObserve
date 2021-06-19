const bcrypt = require("bcrypt");
const { generateToken, verifyToken } = require('./auth');
const { sequelize, models } = require("../database/db");


async function login(userInfo) {
    let Enseignants = models['Enseignants'];

    let { email, password } = userInfo;

    let foundUser = await Enseignants.findOne({ where: { email } });

    let passwordMatch = await bcrypt.compare(password, foundUser.pwdEnseignant);

    if (!passwordMatch) {
        return null;
    }

    const token = generateToken(JSON.stringify(foundUser));

    return token;
}

function getProfessorId(token) {
    return verifyToken(token).refEnseignant;
}

async function getStudentsByGroupAndSpecialty(groupId, specialtyCode) {
    let students = null;

    students = await sequelize.query(`
    SELECT [N°Ins] AS id , Nom_Etudiant AS lastName, Prénom_Etudiant AS firstName , SUM(C.absent) as total_absences FROM Etudiants E
    INNER JOIN Control C ON C.student_id = E.[N°Ins] 
    WHERE E.Réf_Group = ${groupId} AND E.AnnéeCycle = '${specialtyCode}' 
    GROUP BY [N°Ins] , Nom_Etudiant , Prénom_Etudiant;
    `);




    if(!students){
        return null
    }

    return students;
}



module.exports = { loginService: login, getProfessorId, getStudentsByGroupAndSpecialtyService: getStudentsByGroupAndSpecialty };