import { Project } from "../schemas/project.schema.js"
import { Response } from "../services/Response.js";

export const createProject = async (req,res)=> {
 try {
    const {name,description} = req.body;
    const userId = req.user.id;

    const newProject = new Project({name,description,owner:userId})
    await newProject.save();
    return Response(res,200,"Project Created Successfully",newProject)
 } catch (error) {
    return Response(res,500,error.message)
 }
}


export const getProject = async (req,res) => {
    try {
        const projects = await Project.find({owner:req.user.id}).populate('owner','-password');
        Response(res,200,"Project fetched successfully",projects)

    } catch (error) {
        return Response(res,500,error.message)
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Deleting project with ID:", id);

        const deletedProject = await Project.findByIdAndDelete(id);

        if (!deletedProject) {
            return Response(res, 400, "Project not found!");
        }

        return Response(res, 200, "Project Deleted Successfully", deletedProject);
    } catch (error) {
        return Response(res, 500, error.message);  
    }
};