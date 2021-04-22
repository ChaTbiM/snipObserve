const jwt = require("jsonwebtoken");

function generateToken (user){
    const token = jwt.sign(user,process.env.JWT_SECRET);
    return token ;
}

function verifyToken (token){
    try {
        const match = jwt.verify(token,process.env.JWT_SECRET);
        if(match) return match;
    } catch (error) {
        return false;
    }
}

function getToken(authorizationHeader){
    return authorizationHeader.split(" ")[0] === "Bearer" ? authorizationHeader.split(" ")[1] : null;
}


module.exports = {generateToken,verifyToken,getToken}