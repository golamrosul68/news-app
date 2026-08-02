import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 rounded-md outline-none border border-gray-300 focus:border-green-500 h-10"
      />

      <div className="mr-4">
        <div className="flex gap-x-2">
<div className="flex flex-col items-end justify-center">

  <span className="text-gray-700 font-medium">Golam Rosul</span>
  <span className="text-gray-500 text-sm">Admin</span>


</div>

<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;