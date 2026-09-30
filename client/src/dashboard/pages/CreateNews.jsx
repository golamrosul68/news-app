
import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import JoditEditor from "jodit-react";

const CreateNews = () => {

  const editor = useRef(null);

  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write your news description...",
      height: 400,
    }),
    []
  );

  return (
    <div className="bg-white rounded-md">

      {/* Header */}

      <div className="flex justify-between p-4 border-b">

        <h2 className="text-2xl font-bold">
          News
        </h2>

        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
          to="/dashboard/news"
        >
          News
        </Link>

      </div>


      <div className="p-4">

        <form>

          {/* Title */}

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


          {/* Image Upload */}

          <div className="flex flex-col gap-y-2 mb-6">

            <label
              htmlFor="img"
              className="w-full h-[180px] rounded-md text-[#404040] gap-2 justify-center items-center cursor-pointer flex flex-col border-2 border-dashed border-gray-400"
            >

              <div className="flex justify-center items-center flex-col gap-y-2">

                <span className="text-2xl text-gray-400">
                  <MdCloudUpload />
                </span>

                <span className="text-xs text-gray-400 text-center">
                  Upload your news image
                </span>

              </div>

            </label>


            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="hidden"
            />

          </div>


          {/* Description */}

          <div className="flex flex-col gap-y-2 mb-6">

            <div className="flex items-center gap-x-2">

              <h2 className="text-lg font-semibold">
                Description
              </h2>

              <span className="text-2xl text-gray-400">
                <MdCloudUpload />
              </span>

            </div>


            {/* Jodit Editor */}

            <div>

              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
              />

            </div>

          </div>


          {/* Button */}

          <div className="flex justify-end">

            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600"
            >
              Create News
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CreateNews;

