import React from "react";
import { Link } from "react-router-dom";
import NewContent from "../components/NewContent";
const News = () => {
    const userInfo = {
        role: "admin",
    };

  return (
    <div classname="bg-white rounded-md ">
      <div className="flex justify-between p-4">
        <h2 className="text-2xl font-bold">News</h2>

        {userInfo.role !== 'admin' &&  <Link
            className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"   to="/dashboard/news/create">
            Add News
          </Link>
        }
      </div>


      <NewContent />
    </div>
  );
};

export default News;
