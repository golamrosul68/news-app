import React from "react";
import { Link } from "react-router-dom";

const AddWriter = () => {
  return (
    <div className="bg-white rounded-md">
      {/* Header */}
      <div className="flex justify-between p-4">
        <h2 className="text-2xl font-bold">Writer</h2>

        <Link
          to="/dashboard/writers"
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
        >
          Writers
        </Link>
      </div>

      {/* Form */}
      <div className="p-4">
        <form>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-3">
            
            {/* Name */}
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </label>

              <select
                id="category"
                name="category"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                <option value="">Select Category</option>
                <option value="education">Education</option>
                <option value="travel">Travel</option>
                <option value="health">Health</option>
                <option value="international">International</option>
                <option value="sport">Sport</option>
                <option value="technology">Technology</option>
              </select>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add Writer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWriter;