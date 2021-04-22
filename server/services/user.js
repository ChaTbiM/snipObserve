const { models } = require("../database/db");
const bcrypt = require("bcrypt");
const { generateToken, verifyToken } = require('./auth');


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



module.exports = { loginService: login, getProfessorId };