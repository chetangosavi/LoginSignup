/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  MdClose,
  MdDashboard,
  MdWork,
  MdGroup,
  MdPersonAdd,
  MdAddCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "./ui/Model";
import axios from "axios";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-[64px] left-0 h-screen bg-gray-800 text-white z-40 shadow-lg 
        transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-16"}`}
      >
        {isOpen && (
          <div className="flex justify-end p-3">
            <button
              className="text-white p-2 rounded-lg hover:bg-gray-700 transition-all"
              onClick={toggleSidebar}
            >
              <MdClose size={24} />
            </button>
          </div>
        )}

        {/* Sidebar Links */}
        <ul className="mt-4 space-y-2">
          <SidebarLink to="/dashboard" icon={<MdDashboard />} label="Dashboard" isOpen={isOpen} />
          <SidebarLink to="/projects" icon={<MdWork />} label="Projects" isOpen={isOpen} />
          <SidebarLink to="/members" icon={<MdGroup />} label="Members" isOpen={isOpen} />

          {/* Open Modal Instead of Navigating */}
          <SidebarButton onClick={() => openModal("create-member")} icon={<MdPersonAdd />} label="Create Member" isOpen={isOpen} />
          <SidebarButton onClick={() => openModal("create-project")} icon={<MdAddCircle />} label="Create Project" isOpen={isOpen} />
        </ul>
      </div>

      {/* Modal */}
      <Modal open={modalOpen} setOpen={setModalOpen}>
        {modalType === "create-member" && <CreateUserForm />}
        {modalType === "create-project" && <CreateProjectForm setModalOpen={setModalOpen}/>}
      </Modal>
    </>
  );
};

// Sidebar Link for Navigation
const SidebarLink = ({ to, icon, label, isOpen }) => {
  return (
    <li>
      <Link to={to} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-all">
        <span className="text-xl">{icon}</span>
        {isOpen && <span>{label}</span>}
      </Link>
    </li>
  );
};

// Sidebar Button for Modal (Fix Click Issue)
const SidebarButton = ({ onClick, icon, label, isOpen }) => {
  return (
    <li>
      <button onClick={onClick} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-all text-left">
        <span className="text-xl">{icon}</span>
        {isOpen && <span>{label}</span>}
      </button>
    </li>
  );
};

// Create Member Form
const CreateUserForm = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create Member</h2>
      <input type="text" placeholder="Enter Name" className="border p-2 w-full rounded" />
      <input type="email" placeholder="Enter Email" className="border p-2 w-full rounded mt-3" />
      <input type="password" placeholder="Enter Password" className="border p-2 w-full rounded mt-3" />
      <button className="bg-blue-500 text-white p-2 mt-3 rounded w-full">Submit</button>
    </div>
  );
};

// Create Project Form
const CreateProjectForm = ({setModalOpen}) => {
  const [formData , setFormData] = useState({name:'',description:''})


  const handleOnChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleOnSubmit = async (e)=>{
    e.preventDefault();

    const token = localStorage.getItem("token")
    if(!token){
      console.log("Token not present")
      return;
    }

      try {
          const response =  await axios.post('http://localhost:8000/api/projects/create',{name:formData.name,description:formData.description},{
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },})

          console.log(response)
          alert(response.data.message)
          setFormData({ name: "", description: "" })
          setModalOpen(false)
      } catch (error) {
          console.error(error.message)
      }
    }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
      <h2 className="text-xl font-bold mb-4">Create Project</h2>
      <input type="text" name="name" placeholder="Enter project name" className="border p-2 w-full rounded"  onChange={handleOnChange}/>
      <input type="text" name="description" placeholder="Enter project description" className="border p-2 w-full rounded mt-3" onChange={handleOnChange}/>
      <button type="submit" className="bg-green-500 text-white p-2 mt-3 rounded w-full" >Submit</button>
      </form>
    </div>
  );
};

export default Sidebar;
