
import { Router } from "express";
import { sample_users } from "../data";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'
import { UserModel } from "../models/user.model";


const router = Router();


router.get("/seed", asyncHandler(
    async (req,res) => {
        const userCount = await UserModel.countDocuments();
        if(userCount> 0){
            res.send("Seed is already done!");
            return;
        }
            await UserModel.create(sample_users);
            res.send("Seed Is Done!");
        
    }
) )










router.post("/login", asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email,password});
    
             if(user){
                res.send(generateTokenResponse(user));
             }else{
                res.send(400).send("User name or password is not valid!");
             }
    }
))

const generateTokenResponse = (user:any)=>{
    const token = jwt.sign ({
        email:user.email, isAdmin:user.isAdmin
    },"SomeRandomText", {
        expiresIn:"30d"
    });

user.token = token;
return user;


}

export default router;