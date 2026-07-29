import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard, AiOutlinePlus } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiNews } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";


const Sidebar = () => {

const {pathname} = useLocation();




  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
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
      <ul className="px-3 flex flex-col gap-y-1 font-medium mt-3">
        <li>
          <Link
            to="/dashboard/admin"
            className="px-3 ${pathname === '/dashboard/admin'?'bg-indigo-500 text-white':'bg-white text-[#4040f6]'} py-2 w-full rounded-sm flex items-center gap-x-2 justify-start hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <span>< AiOutlineDashboard/></span>
            <span className="text-xl">Dashboard</span>
          </Link>
        </li>
         <li>
          <Link
            to="/dashboard/news"
            className="px-3 ${pathname === '/dashboard//news'?'bg-indigo-500 text-white':'bg-white text-[#4040f6]'} py-2 w-full rounded-sm flex items-center gap-x-2 justify-start hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <span>< BiNews/></span>
            <span className="text-xl">News</span>
          </Link>
        </li>
         <li>
          <Link
            to="/dashboard/writer"
            className="px-3 ${pathname === '/dashboard/writer'?'bg-indigo-500 text-white':'bg-white text-[#4040f6]'} py-2 w-full rounded-sm flex items-center gap-x-2 justify-start hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <span>< AiOutlinePlus/></span>
            <span className="text-xl">Add Writer</span>
          </Link>
        </li>
          <li>
          <Link
            to="/dashboard/writer"
            className="px-3 ${pathname === '/dashboard/writer'?'bg-indigo-500 text-white':'bg-white text-[#4040f6]'} py-2 w-full rounded-sm flex items-center gap-x-2 justify-start hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <span>< FiUsers/></span>
            <span className="text-xl">Writer</span>
          </Link>
        </li>

         <li>
          <Link
            to="/dashboard/profile"
            className="px-3 ${pathname === '/dashboard/profile'?'bg-indigo-500 text-white':'bg-white text-[#4040f6]'} py-2 w-full rounded-sm flex items-center gap-x-2 justify-start hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <span>< ImProfile/></span>
            <span className="text-xl">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;