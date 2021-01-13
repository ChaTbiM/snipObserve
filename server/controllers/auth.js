const {loginService} = require('../services/user');

function login(req,res){
    let userInfo = {email,password} = req.body;
    
    let response = {
        success:false,
        data:null,
        message:null,
    };

    try {
        const token = loginService(userInfo);

        response.data = token;
        response.message = "user is logged in !";

        return response;
    } catch (error) {
        response.message = "email or password is wrong";

        return response;
    }
}

const authController = {
    loginController:login,
}

module.exports = {authController};