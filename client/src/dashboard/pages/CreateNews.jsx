import React from "react";
import { Link } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";

const CreateNews = () => {
  return (
    <div classname="bg-white rounded-md ">
      <div className="flex justify-between p-4">
        <h2 className="text-2xl font-bold">News</h2>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
          to="/dashboard/news"
        >
          News
        </Link>
      </div>

      <div className="p-4">
        <form>
          <div className="flex flex-col gap-y-2 mb-6">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

<div className="flex flex-col gap-y-2 mb-6">


   <div>
            <label
              htmlFor="img"
              className="w-full h-[180px] rounded-md text-[#404040] gap-2 justify-center items-center cursor-pointer flex flex-col border-2 border-dashed border-gray-400"
            >
              <div className="flex justify-center items-center flex-col gap-y-2">
  
                <span className="text-2xl text-gray-400">
                  <MdCloudUpload />
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



</div>


<div className="flex flex-col gap-y-2 mb-6">


</div>


        </form>
      </div>
    </div>
  );
};

export default CreateNews; 
