import axios from "axios";
import { useEffect, useState } from "react";
import ProjectContainer from "../components/projectContainer";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchingProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/projects/get",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProjects(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingProjects();
  }, []);

  console.log(projects);
  return (
    <div className="mt-24 ml-16 p-10">
      <h1 className="font-bold text-4xl  drop-shadow-lg">Projects</h1>
      <p className="text-sm text-gray-500 mt-2">
        Manage all your projects in one place. Create, track, and collaborate
        efficiently to ensure smooth progress and completion.
      </p>
      <hr  className="mt-8"/>

      {projects.length === 0 ? (
        <div className="h-[50vh] flex items-center justify-center">
          <p className="text-xl text-gray-500">No projects exist 😔</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <ProjectContainer
              key={project._id}
              id={project._id}
              name={project.name}
              description={project.description}
              status={project.status}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
