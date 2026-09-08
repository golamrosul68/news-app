
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard, AiOutlinePlus } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const { pathname } = useLocation();

  const userInfo = {
    role: "writer", // "admin" or "writer"
  };

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white">
      {/* Logo */}
      <div className="h-[70px] flex items-center justify-center bg-gray-900">
        <Link to="/">
          <img
            src="https://news-portal-mern.onrender.com/assets/logo-00ebaab6.png"
            alt="Logo"
            className="w-[190px] h-[35px]"
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className="px-3 mt-3 flex flex-col gap-y-2 font-medium">
        {userInfo.role === "admin" ? (
          <>
            {/* Admin Dashboard */}
            <li>
              <Link
                to="/dashboard/admin"
                className={`px-3 py-2 w-full rounded-sm flex items-center gap-x-2 ${
                  pathname === "/dashboard/admin"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#4040f6]"
                } hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20`}
              >
                <AiOutlineDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>

            {/* Add Writer */}
            <li>
              <Link
                to="/dashboard/add-writer"
                className={`px-3 py-2 w-full rounded-sm flex items-center gap-x-2 ${
                  pathname === "/dashboard/add-writer"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#4040f6]"
                } hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20`}
              >
                <AiOutlinePlus size={20} />
                <span>Add Writer</span>
              </Link>
            </li>

            {/* Writers */}
            <li>
              <Link
                to="/dashboard/writers"
                className={`px-3 py-2 w-full rounded-sm flex items-center gap-x-2 ${
                  pathname === "/dashboard/writers"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#4040f6]"
                } hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20`}
              >
                <FiUsers size={20} />
                <span>Writer</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* Writer Dashboard */}
            <li>
              <Link
                to="/dashboard/writer"
                className={`px-3 py-2 w-full rounded-sm flex items-center gap-x-2 ${
                  pathname === "/dashboard/writer"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#4040f6]"
                } hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20`}
              >
                <AiOutlineDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>

            {/* Add News */}
            <li>
              <Link
                to="/dashboard/news/create"
                className={`px-3 py-2 w-full rounded-sm flex items-center gap-x-2 ${
                  pathname === "/dashboard/news/create"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#4040f6]"
                } hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20`}
              >
                <FaPlus size={20} />
                <span>Add News</span>
              </Link>
            </li>
          </>
        )}

        {/* Profile */}
        <li>
          <Link
            to="/dashboard/profile"
            className={`px-3 py-2 w-full rounded-sm flex items-center gap-x-2 ${
              pathname === "/dashboard/profile"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#4040f6]"
            } hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20`}
          >
            <ImProfile size={20} />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

