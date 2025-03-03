import { User } from "../schemas/user.schema.js";
import { Response } from "../services/Response.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            Response(resizeBy,400,"Unauthorized")
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return Response(res,401,'Unauthorized')
    }
}

// isAdmin
export const isAdmin = async (req,res,next)=>{
    try {
        let userId = req.user.userId;

        const user = await User.findOne({_id:userId})
        if(user.role !=='admin'){
            return Response(res,400,"Unauthorized")
        }
        next()
    } catch (error) {
        return Response(res,500,"Unauthorized")
    }
}

// isUser

export const isUser = async (req,res,next) => {
    try {
        let userId =  req.user.userId;
        const user = await User.findById({_id : userId})
        
        if(user.role !== 'user'){
            return Response(res,401,'Unauthorized')
        }
        next()
    } catch (error) {
        return Response(res,401,'Unauthorized')
    }
}