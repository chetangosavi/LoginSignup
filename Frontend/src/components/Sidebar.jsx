/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  MdClose,
  MdDashboard,
  MdWork,
  MdGroup,
  MdSettings,
  MdPersonAdd,
  MdAddCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "./ui/Model";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [modalOpen, setModalOpen] = useState(false); // ✅ Fix: Use boolean
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
          <SidebarLink to="/teams" icon={<MdGroup />} label="Members" isOpen={isOpen} />
          <SidebarLink to="/settings" icon={<MdSettings />} label="Settings" isOpen={isOpen} />

          {/* Open Modal Instead of Navigating */}
          <SidebarButton onClick={() => openModal("create-member")} icon={<MdPersonAdd />} label="Create Member" isOpen={isOpen} />
          <SidebarButton onClick={() => openModal("create-project")} icon={<MdAddCircle />} label="Create Project" isOpen={isOpen} />
        </ul>
      </div>

      {/* Modal */}
      <Modal open={modalOpen} setOpen={setModalOpen}>
        {modalType === "create-member" && <CreateUserForm />}
        {modalType === "create-project" && <CreateProjectForm />}
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
      <input type="text" placeholder="Enter name" className="border p-2 w-full rounded" />
      <button className="bg-blue-500 text-white p-2 mt-3 rounded w-full">Submit</button>
    </div>
  );
};

// Create Project Form
const CreateProjectForm = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create Project</h2>
      <input type="text" placeholder="Enter project name" className="border p-2 w-full rounded" />
      <input type="text" placeholder="Enter project description" className="border p-2 w-full rounded mt-3" />
      <button className="bg-green-500 text-white p-2 mt-3 rounded w-full">Submit</button>
    </div>
  );
};

export default Sidebar;
