import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

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
          <p className="text-sm mt-10">Or, login with</p>
          <div>
            <button className="w-96 mt-2 bg-[#8dbe3f] py-2 rounded-sm text-center flex items-center justify-center gap-4 font-bold">
              <span className="text-2xl  text-[#0866FF] bg-white rounded-full">
                <FaFacebook />
              </span>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
