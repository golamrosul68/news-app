
import React from "react";

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
        <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-[999]">

          <h1 className="text-2xl font-bold text-center mb-4">
            Gallery
          </h1>

          {images && images.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">

              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              ))}

            </div>
          ) : (
            <div className="flex items-center justify-center h-[60vh]">
              <p className="text-gray-500">
                No images found
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Galler;

