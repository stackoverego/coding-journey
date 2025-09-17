const userModel=require("../models/user.model");
const userService=require("../services/user.service");
const {validationResult}=require("express-validator");

module.exports.registerUser = async(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()) {
        res.status(400).json({error:error.array()});
    }

    console.log(req.body)
  

    const hashPassword= await userModel.hashPassword(password)

    const user =await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
    })  

    const token =user.genrateAuthToken();

    res.status(201).json({token,user});
}