const { models } = require("../database/db");
const bcrypt = require("bcrypt");
const { generateToken } = require('./auth');


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



module.exports = { loginService: login };