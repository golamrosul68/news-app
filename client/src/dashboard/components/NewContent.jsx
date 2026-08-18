import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const NewContent = () => {
  return (
    <div className="w-full">
      {/* Search & Filter */}
      <div className="px-4 py-3 flex gap-3">
        <select
          name="category"
          className="w-48 h-11 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          <option value="">Select Category</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <input
          type="text"
          placeholder="Search news"
          className="w-64 h-11 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">No</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Image</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">1</td>

              <td className="px-6 py-4">Breaking News</td>

              <td className="px-6 py-4">
                <img
                  src="	https://admin.breakingnews.com.bd/images/2026-08-18/1787058607-_screenshot_8_18_2026%207_09_20.avif"
                  alt="News"
                  className="w-12 h-12 object-cover rounded"
                />
              </td>

              <td className="px-6 py-4">Technology</td>

              <td className="px-6 py-4">This is a news description.</td>

              <td className="px-6 py-4">18 Aug 2026</td>

              <td className="px-6 py-4">
                <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Active
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-start items-center gap-x-4 text-white">
                  <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"><FaEye/>
                  </Link>
                  <Link className="p-[6px] bg-blue-500 rounded hover:shadow-lg hover:shadow-blue-500/50"><FaEdit/></Link>
                  <div className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50" ><FaTrash/></div>


                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewContent;
