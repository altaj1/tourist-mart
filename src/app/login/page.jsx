import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const page = () => {
  return (
    <div className="relative h-[90vh]">
      <div className="absolute inset-0 bg-[url('/images/login.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 lg:ml-64 p-5 text-yellow-50 flex items-center pt-36 flex-col  h-full">
        <div className="flex justify-around gap-24 items-center">
          <p className="text-2xl font-bold">
            Welcome to TouristMart! Please login.
          </p>
          <Link className="text-sm hover:text-[#8dbe3f]" href={"/sign-up"}>
            New menber? Register here
          </Link>
        </div>
        <div className="bg-slate-50 bg-opacity-30 p-10 rounded-sm mt-16 shadow-lg">
          <form className="space-y-4" action="">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="">
                Account*
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-96 py-2 pl-4 rounded-sm focus:outline-[#8dbe3f]"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="">
                Password*
              </label>
              <input
                required
                type="password"
                name="password"
                className="w-96 py-2 pl-4 rounded-sm focus:outline-[#8dbe3f]"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <input
                type="subme"
                className="w-96 mt-2 bg-[#8dbe3f] py-2 rounded-sm text-center font-bold"
                value={"Login"}
              />
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <hr className="flex-grow border-t-2 border-gray-300" />
            <span className="px-2 text-sm ">
              Or, continue with
            </span>
            <hr className="flex-grow border-t-2 border-gray-300" />
          </div>

          <div className="flex gap-8 items-center justify-center mt-10">
            <button className="">
              <p className="bg-white rounded-full overflow-hidden">
                <span className="text-4xl  text-[#0866FF] overflow-hidden hover:shadow-lg ">
                <FcGoogle />
                </span>
              </p>
            </button>
            <button className="">
              <p className="bg-white rounded-full overflow-hidden">
                <span className="text-4xl  text-[#0866FF] overflow-hidden hover:shadow-lg ">
                  <FaFacebook />
                </span>
              </p>
            </button>
            <button className="">
              <p className="bg-[#DDDDDD] rounded-full overflow-hidden">
                <span className="text-4xl  text-[#333333] overflow-hidden hover:shadow-lg ">
                  <FaApple />
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
