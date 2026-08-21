import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Writers = () => {
  const writers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="bg-white rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold">Writers</h2>

        <Link
          to="/dashboard/writer/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
        >
          Add Writer
        </Link>
      </div>

      {/* Writers Table */}
      <div className="bg-white p-4 mt-5">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-semibold">Recent Writers</h2>

          <Link
            to="/dashboard/writers"
            className="text-blue-500 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">No</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Active</th>
              </tr>
            </thead>

            <tbody>
              {writers.map((writer, i) => (
                <tr
                  key={writer}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  {/* No */}
                  <td className="px-6 py-4">{i + 1}</td>

                  {/* Name */}
                  <td className="px-6 py-4">Shake Farid</td>

                  {/* Category */}
                  <td className="px-6 py-4">Education</td>

                  {/* Role */}
                  <td className="px-6 py-4">Writer</td>

                  {/* Image */}
                  <td className="px-6 py-4">
                    <img
                      src="https://admin.breakingnews.com.bd/images/2026-08-18/1787058607-_screenshot_8_18_2026%207_09_20.avif"
                      alt="Shake Farid"
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4">
                    farid123@gmail.com
                  </td>

                  {/* Active */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-x-4 text-white">
                      <Link
                        to={`/dashboard/writer/view/${writer}`}
                        className="p-2 bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Writers;