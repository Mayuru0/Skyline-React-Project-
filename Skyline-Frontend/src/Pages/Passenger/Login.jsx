import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdFlight } from "react-icons/md";


const Login = () => {
  return (
    <div
      className="text-white h-screen flex justify-center items-center bg-cover"
      style={{ backgroundImage: `url(./src/assets/bg/go.jpg)` }}
    >
      <div className="text-black bg-blue-100 rounded-2xl shadow-xl flex w-2/3 max-w-4xl ">
        <div className="w-3/5 p-5 ">
          {/*sign in section*/}
          
          <div className="text-left font-bold ">
            
            <img
              src="./src/assets/logo/new logo.png"
              class="h-14 w-14 me-6  "
              alt="Skyline Logo"
            />

          
          </div>

          <div className="py-10 ">
            <h2 className="text-slate-900 text-center text-3xl font-bold">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-black mb-2 mx-auto"></div>
            {/*Social Login Section*/}
            <div className="flex justify-center  my-2">
              <div className="flex justify-center  my-2">
                <a
                  href="#"
                  className="border-2 border-gray-800 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
              </div>
              <div className="flex justify-center  my-2">
                <a
                  href="#"
                  className="border-2 border-gray-800 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <div className="flex justify-center  my-2">
                <a
                  href="#"
                  className="border-2 border-gray-800 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm my-3">
              {" "}
              or use your email account
            </p>
            {/*from*/}
            <div className="flex flex-col items-center mb-3">
              <div className="bg-gray-100 w-64 p-2 flex items-center ">
                <FaRegEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col items-center mb-3">
              <div className="bg-gray-100 w-64 p-2 flex items-center ">
                <MdLockOutline  className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
                <div className="flex justify-between w-64 mb-5 mt-2"> <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Remember me</label> 
                <a href="" className="text-xs">Forget Password?</a>
                </div>
                <a
            href="#"
            className="border-2 border-blue-500  text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-black "
          >
            {" "}
            Sign In
          </a>

            </div>
          </div>
        </div>

        {/*sign up section*/}
        <div className="w-2/5 bg-slate-800 rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-2 text-white">WellCome!</h2>
          <div className="border-2 w-10 border-white mb-2"></div>
          <p className="mb-2 text-white text-center">
            Fill up personal information and start journey with us,
          </p>
          <a
            href="registration"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black text-slate-200 "
             >
            {" "}
            Sign UP
          </a>
          <div className="text-white mt-7 ">
          <MdFlight  className=" h-20 w-20"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
