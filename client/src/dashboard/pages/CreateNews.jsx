import React from 'react'
import { Link } from 'react-router-dom'
const CreateNews = () => {
  return (
   <div className=" bg-white rounded-md p">
   <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold"> Add News</h2>
    <Link to="/dashboard/news" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">
      Back to News
    </Link>



   </div>

   
   </div>
  )
}

export default CreateNews