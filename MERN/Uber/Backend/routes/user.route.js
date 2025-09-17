const express=require("express");
const router= express.Router();
const {body}=require("express-validator");
const userController=require("../controllers/user.controller");

router.post("/register",[
    body('email').isEmail().withMessage("invaild email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be atleast of 3 letters"),
    body('password').isLength({min:6}).withMessage("Password must be atleast of 6 letters"),

],userController.registerUser)



module.exports = router;