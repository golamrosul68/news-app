
import React from "react";
import { Link } from "react-router-dom";

const CreateNews = () => {
  return (
    <div className="bg-white rounded-md shadow-sm">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-700">
          Create News
        </h2>

        <Link
          to="/dashboard/news"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Back to News
        </Link>
      </div>


      {/* ================= FORM ================= */}
      <div className="p-5">

        <form>

          {/* ================= TITLE ================= */}
          <div className="flex flex-col gap-y-2 mb-5">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-600"
            >
              News Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter news title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
            />
          </div>


          {/* ================= CATEGORY ================= */}
          <div className="flex flex-col gap-y-2 mb-5">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-600"
            >
              Category
            </label>

            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
            >
              <option value="">
                Select Category
              </option>

              <option value="politics">
                Politics
              </option>

              <option value="sports">
                Sports
              </option>

              <option value="technology">
                Technology
              </option>

              <option value="business">
                Business
              </option>

              <option value="entertainment">
                Entertainment
              </option>

              <option value="international">
                International
              </option>
            </select>
          </div>


          {/* ================= IMAGE ================= */}
          <div className="flex flex-col gap-y-2 mb-5">
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-600"
            >
              News Image
            </label>

            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
            />
          </div>


          {/* ================= DESCRIPTION ================= */}
          <div className="flex flex-col gap-y-2 mb-5">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-600"
            >
              News Description
            </label>

            <textarea
              id="description"
              name="description"
              rows="8"
              placeholder="Write your news description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none resize-none focus:border-indigo-500"
            ></textarea>
          </div>


          {/* ================= BUTTON ================= */}
          <div className="flex items-center gap-x-3">

            <button
              type="submit"
              className="px-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Publish News
            </button>

            <Link
              to="/dashboard/news"
              className="px-5 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </Link>

          </div>

        </form>

      </div>
    </div>
  );
};

export default CreateNews;

