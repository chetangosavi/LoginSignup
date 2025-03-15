import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-6">
      <div className="  rounded-2xl p-10 max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-red-800 tracking-wider">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-1">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
