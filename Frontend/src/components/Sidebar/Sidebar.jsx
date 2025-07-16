import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/context/UserDataContext";
import { FiSettings, FiHelpCircle, FiMoreVertical } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const { user } = useUser();
  const [open, setOpen] = useState(true); // toggle for "Quick Access"

  return (
    <div className="flex  h-screen bg-[#0F0F0F] text-white">
      {/* TOP: Quick Access Group */}
      <aside className="w-64 bg-[#1A1A1A] flex flex-col justify-between py-4 px-4">
        <div>
          <h1 className="text-2xl font-bold mb-6">Polypath</h1>
          <div className="text-sm font-medium text-gray-400 mb-2">
            Quick Access
          </div>
          <nav className="flex flex-col space-y-2">
            <Link to={"/skills"} className="">
              <button className="text-left px-3 py-2 rounded-md hover:bg-[#2A2A2A]">
                Skills
              </button>
            </Link>
            <Link to={"/journal"} className="">
              <button className="text-left px-3 py-2 rounded-md hover:bg-[#2A2A2A]">
                Journal
              </button>
            </Link>
            <Link to={"/timeline"} className="">
              <button className="text-left px-3 py-2 rounded-md hover:bg-[#2A2A2A]">
                Timeline
              </button>
            </Link>
            <Link to={"/progress-tracker"} className="">
              <button className="text-left px-3 py-2 rounded-md hover:bg-[#2A2A2A]">
                Progress Tracker
              </button>
            </Link>
            <Link to={"/achievements"} className="">
              <button className="text-left px-3 py-2 rounded-md hover:bg-[#2A2A2A]">
                Achievements
              </button>
            </Link>
            <Link to={"/projects"} className="">
              <button className="text-left px-3 py-2 rounded-md hover:bg-[#2A2A2A]">
                Projects
              </button>
            </Link>
          </nav>
        </div>
        <div className="space-y-3">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white">
            <FiHelpCircle /> Get Help
          </button>
          <div className="flex items-center justify-between p-2 bg-[#2A2A2A] rounded-lg">
            <div className="flex items-center gap-2">
              <FaUserCircle size={28} />
              <div>
                <p className="text-sm font-semibold leading-4">Ujjwal</p>
                <p className="text-xs text-gray-400">@ujjwal</p>
              </div>
            </div>
            <FiMoreVertical className="text-gray-400" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
