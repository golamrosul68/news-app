import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Adminindex = () => {
  return (
    <div className="mt-2 p-4 bg-slate-100 rounded-md">
      <div className="grid grid-cols-5 gap-x-4">
        <div className="w-full p-8 flex justify-center flex-col items-center rounded-md gap-y-2 bg-white text-slate-700 shadow-lg shadow-slate-300">
          <span className="text-xl font-bold">50</span>
          <span className="text-base">Total News</span>
        </div>

        <div className="w-full p-8 flex justify-center flex-col items-center rounded-md gap-y-2 bg-white text-slate-700 shadow-lg shadow-slate-300">
          <span className="text-xl font-bold">50</span>
          <span className="text-base">Pending News</span>
        </div>

        <div className="w-full p-8 flex justify-center flex-col items-center rounded-md gap-y-2 bg-white text-slate-700 shadow-lg shadow-slate-300">
          <span className="text-xl font-bold">50</span>
          <span className="text-base">Active News</span>
        </div>

        <div className="w-full p-8 flex justify-center flex-col items-center rounded-md gap-y-2 bg-white text-slate-700 shadow-lg shadow-slate-300">
          <span className="text-xl font-bold">50</span>
          <span className="text-base">Deactive News</span>
        </div>

        <div className="w-full p-8 flex justify-center flex-col items-center rounded-md gap-y-2 bg-white text-slate-700 shadow-lg shadow-slate-300">
          <span className="text-xl font-bold">50</span>
          <span className="text-base">Writers</span>
        </div>
      </div>

      <div className="bg-white p-4 mt-5">
        <div>
          <h2 className="flex justify-between items-center pb-4">
            Recent News
          </h2>
          <Link>view all</Link>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">No</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
            {
            
            
            [1, 2, 3, 4, 5,6, 7].map((n,  i) => <tr key={i} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">1</td>

                <td className="px-6 py-4">Breaking News</td>

                <td className="px-6 py-4">
                  <img
                    src="	https://admin.breakingnews.com.bd/images/2026-08-18/1787058607-_screenshot_8_18_2026%207_09_20.avif"
                    alt="News"
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                <td className="px-6 py-4">Technology</td>

                <td className="px-6 py-4">This is a news description.</td>

                <td className="px-6 py-4">18 Aug 2026</td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-start items-center gap-x-4 text-white">
                    <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                      <FaEye />
                    </Link>
                  </div>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Adminindex;
