import { Link } from "react-router-dom";
import ToggleTheme from "../components/ToggleTheme";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#121212] text-gray-800 dark:text-white p-4">
      <ToggleTheme />
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Become a polymath</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Track and master new skills across multiple disciplines.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
