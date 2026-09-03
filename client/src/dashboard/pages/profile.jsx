import React from "react";
import { FaImage } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 mt-6">

      <div className="bg-white gap-x-6 p-4 rounded-md flex justify-center items-center">

        <div>
          <label
            htmlFor="img"
            className="w-[150px] h-[150px] rounded-md text-[#404040] gap-2 justify-center items-center cursor-pointer flex flex-col border-2 border-dashed border-gray-400"
          >
            <div className="flex justify-center items-center flex-col gap-y-2">

              <span className="text-2xl text-gray-400">
                <FaImage />
              </span>

              <span className="text-xs text-gray-400 text-center">
                Upload your profile picture
              </span>

            </div>
          </label>

          <input
            type="file"
            id="img"
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="text-[#404040] flex flex-col gap-y-1 ml-4">

          <span className="text-xs">
            Name : Badhon Ahmed
          </span>

          <span className="text-xs">
            Email : golamrosul68990@gmail.com
          </span>

          <span className="text-xs">
            Category : Education
          </span>

        </div>

      </div>


      <div className="bg-white px-6 py-4 text-[#404040]">

        <h2 className="pb-3 text-center">
          Change Password
        </h2>

        <form>

          <div className="flex flex-col gap-y-2 mb-3">

            <label
              htmlFor="oldPassword"
              className="text-sm font-medium text-gray-700"
            >
              Old Password
            </label>

            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              placeholder="Enter old password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />

          </div>


          <div className="flex flex-col gap-y-2 mb-3">

            <label
              htmlFor="newPassword"
              className="text-sm font-medium text-gray-700"
            >
              New Password
            </label>

            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter new password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />

          </div>


          <div className="flex flex-col gap-y-2">

            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm new password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />

          </div>


          <div className="mt-4">

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Change Password
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Profile;