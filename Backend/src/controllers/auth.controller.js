import { User } from "../schemas/user.schema.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { Response } from "../services/Response.js";

export const signup = async (req,res)=>{
    try {
        const {name,email,password} = req.body;

        const user = await User.findOne({email})
        if(user){
            return Response(res,400,"User already exists")
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        return Response(res,201,"User Created Successfully",{user:newUser})
    } catch (error) {
        return Response(res,500,"Server Error")
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})

        if(!user){
            return Response(res,400,"User not found!")
        }

        const isPassword = bcrypt.compare(password,user.password)

        if(!isPassword){
            return Response(res,400,"Invalid Password!")
        }

        const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn : '5h'})
        return Response(res,200,"User Logged In Successfully",{token,user})
    } catch (error) {
        return Response(res,500,error.message)
    }
}


export const me = async (req,res)=>{
try {
    const user = await User.findOne({_id:req.user.userId})
    console.log({user})
    return Response(res,200,"User Fetched Successfully",{user})
} catch (error) {
    return Response(res,500,error.message);
}
}