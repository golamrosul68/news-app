import React from "react";
import { Link } from "react-router-dom";

const CreateNews = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Create News</h2>
        <Link
          className="px-3 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          to="/dashboard/news"
        >
          Back to News
        </Link>
      </div>

<div className="p-4">

  <form>


    <div className=" flex flex-col gap-y-2">

<label classname= 'text-md font-medium text-gray-600' htmlFor="email">Email</label>
<input type="email"  placeholder="Enter your email" name='email' classname='px-3  py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='email'></input>
     
    </div>


  </form>
</div>


    </div>
  );
};

export default CreateNews;
