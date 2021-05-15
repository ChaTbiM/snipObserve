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
    let student = null;
    student = await sequelize.query(`SELECT [N°Ins] AS id , Nom_Etudiant AS lastName, Prénom_Etudiant AS firstName FROM Etudiants E 
    WHERE E.Réf_Group = ${groupId} AND E.AnnéeCycle = '${specialtyCode}' ;
    `);

    if(!student){
        return null
    }

    return student;
}



module.exports = { loginService: login, getProfessorId, getStudentsByGroupAndSpecialtyService: getStudentsByGroupAndSpecialty };