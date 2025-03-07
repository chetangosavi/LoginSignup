/* eslint-disable react/prop-types */
import { TiDelete } from "react-icons/ti";

const ProjectContainer = ({ id,name, description, status }) => {

  const onDelete = ()=> {

  }
  return (
    <div>
      <div className="flex flex-col gap-1 bg-white p-10 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="text-sm text-gray-400">{description}</p>
        <p className="text-orange-500">{status}</p>

        <button
          onClick={() => onDelete(id)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
        >
          <TiDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProjectContainer;
