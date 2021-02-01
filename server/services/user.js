const { User } = require("../database/db");
const bcrypt = require("bcrypt");
const { generateToken } = require('./auth');


async function login(userInfo) {
    let { email, password } = userInfo;
    // retrieve user with email 
    let foundUser = await User.findOne({ where: { email } });
    // check the retrieved user password with the provided password
    let passwordMatch = bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
        return null;
    }
    // generate token that includes user information
    const token = generateToken(JSON.stringify(foundUser));
    // return token 
    return token;
}



module.exports = { login };