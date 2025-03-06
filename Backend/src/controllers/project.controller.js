import { Project } from "../schemas/project.schema.js"
import { Response } from "../services/Response.js";

export const createProject = async (req,res)=> {
 try {
    const {name,description} = req.body;
    const userId = req.user.userId;
    console.log(req.user)
    console.log("userId: ",userId)
    const newProject = new Project({name,description,owner:userId})
    await newProject.save();
    return Response(res,200,"Project Created Successfully",newProject)
 } catch (error) {
    return Response(res,500,error.message)
 }
}

export const getProject = async (req,res) => {
    try {
        const projects = await Project.find()
        Response(res,200,"Project fetched successfully",projects)

    } catch (error) {
        return Response(res,500,error.message)
    }
}
