import UserModel from '../models/user.js';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

var salt = bcrypt.genSaltSync(10);

export async function UserRegister(req, res){
        try
        {
            const {name, email, password}=req.body;
            const hashPassword = bcrypt.hashSync(password, salt);
            const newUser = new UserModel({name, email,password:hashPassword})
            await newUser.save();
            res.json({success:true})
        }
        catch(err){
            res.json({success:false, error:err})
            console.log(err);
        }
}

export async function UserLogin(req, res){
        try
        {
            const {email, password}=req.body;
            const user=await UserModel.findOne({email})
            if(user){
                const userValid=bcrypt.compareSync(password, user.password);
                if(userValid){
                    const token=jwt.sign(
                        {
                            name:user.name,
                            email:user.email
                        }, 
                        "secret123"
                        )
                    return res.json({success:true, user:token})
                }
                else{
                    return res.json({success:false, error:"Password wrong"})
                }
            }else{
                res.json({success:false, error:"No email found"})
            }
        }
        catch(err){
            res.json({success:false,message:"server error", error:err})
            console.log(err);
        }
}