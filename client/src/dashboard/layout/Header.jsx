import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 rounded-lg shadow">
      {/* Search */}
      <div className="relative w-[380px]">
        <FiSearch
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search news, writers..."
          className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <h2 className="font-semibold text-gray-800">Golam Rosul</h2>
          <p className="text-sm text-gray-500">Admin</p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="w-11 h-11 rounded-full border-2 border-indigo-500"
        />
      </div>
    </div>
  );
};

export default Header;