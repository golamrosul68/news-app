
import React, { useState } from "react";
import {base_url} from "../../config/config";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {


const [loader, setLoader] = useState(false);



  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    setLoader(true);

    try {
      const {data} = await axios.post(`${base_url}/api/login`, state);
      toast.success("Login successful!");
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      toast.error("Invalid email or password");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[340px] text-slate-600 shadow-md">
        <div className="bg-white h-full px-7 py-8 rounded-md">
          
          {/* Logo */}
          <div className="w-full justify-center items-center flex">
            <img
              src="https://news-portal-mern.onrender.com/assets/logo-00ebaab6.png"
              alt="logo"
              className="w-[200px]"
            />
          </div>

          {/* Form */}
          <form onSubmit={submit} className="mt-8">
            
            {/* Email */}
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                onChange={inputHandle}
                value={state.email}
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-y-2 mt-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                onChange={inputHandle}
                value={state.password}
                required
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Login Button */}
            <div className="mt-5">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full"
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

