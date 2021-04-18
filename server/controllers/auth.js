const {loginService} = require('../services/user');

async function login(req,res){
    let {email,password} = req.body;

    let userInfo = {email,password};

    let response = {
        success:false,
        data:null,
        message:null,
    };

    try {
        const token = await loginService(userInfo);
        if(!token){
            throw new Exception("email or password is wrong")
        }
        response.data = token;
        response.message = "user is logged in !";
        response.success = true;

        return res.json(response);
    } catch (error) {
        response.message = "email or password is wrong";

        return res.json(response);
    }
}


module.exports = {loginController:login};