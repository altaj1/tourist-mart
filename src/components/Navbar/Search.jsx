import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="lg:w-full md:w-full w-44 flex items-center lg:rounded-lg md:rounded-lg rounded-l-lg bg-slate-50 hover:outline outline-[#8dbe3f] transition-all duration-150 ease-in-out">
    <input
      type="text"
      placeholder="Search Tourist Mart"
      className="lg:w-full md:w-full w-44 lg:rounded-lg md:rounded-lg pl-5 focus:outline-none text-gray-800"
    />
    <div className="text-xl text-gray-800 bg-[#8dbe3f] py-3 pr-5 rounded-r-lg pl-4 hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out">
      <IoSearchSharp />
    </div>
  </div>
  
  );
};

export default Search;
