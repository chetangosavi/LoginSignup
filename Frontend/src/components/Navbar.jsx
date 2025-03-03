import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/"); 
    window.location.reload(); 
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TASKLY</h1>
      <div className="flex items-center gap-4">
        <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
