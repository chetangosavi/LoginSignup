import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 fixed top-0 left-0 w-full z-50">
      <div className=" flex justify-between items-center">
        {/* Hamburger Button on the Left */}
        <div className="flex items-center gap-4">
          <button
            className="text-gray-700 p-2 rounded-lg hover:bg-gray-200"
            onClick={toggleSidebar}
          >
            <MdMenu size={30} />
          </button>
          <h1 className="text-4xl font-bold">TASKLY</h1>
        </div>

        <div className="flex items-center gap-4">
          <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300  
            hover:shadow-lg hover:from-blue-500 hover:to-purple-500"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
