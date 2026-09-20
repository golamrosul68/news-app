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

  
</div>


    </div>
  );
};

export default CreateNews;
