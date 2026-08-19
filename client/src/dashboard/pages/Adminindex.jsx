// import React from 'react'

const Adminindex = () => {
  return (
    <div className="mt-2 p-4 bg-slate-100 rounded-md">
      <div className="grid grid-cols-5 gap-x-4">
        <div className="w-full p-8 flex justify-center flex-col rounded-md gap-y-2 bg-white text-slate-700 itams-center shadow-lg shadow-slate-300">
          <span className=" text-xl font-bold">50</span>
          <span className=" text-md">Total News</span>
        </div>

        <div className="w-full p-8 flex justify-center flex-col rounded-md gap-y-2 bg-white text-slate-700 itams-center shadow-lg shadow-slate-300">
          <span className=" text-xl font-bold">50</span>
          <span className=" text-md">pending news</span>
        </div>
        <div className="w-full p-8 flex justify-center flex-col rounded-md gap-y-2 bg-white text-slate-700 itams-center shadow-lg shadow-slate-300">
          <span className=" text-xl font-bold">50</span>
          <span className=" text-md">Active News</span>
        </div>
        <div className="w-full p-8 flex justify-center flex-col rounded-md gap-y-2 bg-white text-slate-700 itams-center shadow-lg shadow-slate-300">
          <span className=" text-xl font-bold">50</span>
          <span className=" text-md">Deactive News</span>
        </div>
        <div className="w-full p-8 flex justify-center flex-col rounded-md gap-y-2 bg-white text-slate-700 itams-center shadow-lg shadow-slate-300">
          <span className=" text-xl font-bold">50</span>
          <span className=" text-md">Writers</span>
        </div>
      </div>
    </div>
  );
};

export default Adminindex;
