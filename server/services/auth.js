const jwt = require("jsonwebtoken");

function generateToken (user){
    const token = jwt.sign(user,process.env.JWT_SECRET);
    return token ;
}

function verifyToken (token){
    try {
        const match = jwt.verify(token,process.env.JWT_SECRET);
        if(match) return true;
    } catch (error) {
        return false;
    }
}


module.exports = {generateToken,verifyToken}