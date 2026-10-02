import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";

const Galler = ({ setShow, images }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-[9999] flex items-center justify-center">
      <div className="w-full h-full relative flex items-center justify-center">
        {/* Background */}
        <div
          onClick={() => setShow(false)}
          className="bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]"
        ></div>

        {/* Gallery Box */}
        <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[999]">
          <div className="pb-3 justify-between items-center w-full flex">
            <h2 className="text-lg font-semibold text-gray-800">Gallery</h2>
            <div
              onClick={() => setShow(false)}
              className="cursor-pointer text-gray-800 hover:text-gray-600"
            >
              <AiOutlineClose />
            </div>
          </div>

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

          <div className="grid grid-cols-4 gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Galler;
