"use client";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import Search from "./Search";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-[#232F3E] text-yellow-50">
      {/* first navbar */}
      <div className="navbar container mx-auto">
      <div className="   flex navbar-start ">
        {/* hambarger manue */}
        <div className="dropdown bg-[#232F3E]">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden text-yellow-50 text-3xl "
          >
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2    "
          >
            <Link href={"/"} className="text-lg font-medium">
              Gift Cards
            </Link>
            <Link href={"/"} className="text-lg font-medium">
              Tourist Mart Donates
            </Link>
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1">
              Help & Support
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row  w-full hidden lg:block md:block gap-8">
          <Link href={"/"} className="text-lg font-medium mr-5">
            Gift Cards
          </Link>
          <Link href={"/"} className="text-lg font-medium mr-5">
            Tourist Mart Donates
          </Link>
          <Link href={"/"} className="text-lg font-medium mr-5">
          Become a supplier
          </Link>
          <div className="dropdown dropdown-hover mr-5 ">
            <div tabIndex={0} role="button" className=" m-1 flex items-end ">
              <p>Help & Support</p>
               <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu text-gray-800 bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-end text-end  space-x-4">
          <Link href={"/login"} className="text-lg font-medium">
            Login
          </Link>
          {/* Uncomment if needed */}
          {/* <div>
            <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} className="rounded-full"/>
          </div> */}
          {/* {session?.status === 'loading' && <h6>Loading....</h6>}
          {session?.status === 'unauthenticated' && <Link href="/login" className="btn btn-primary px-8">Login</Link>}
          {session?.status === 'authenticated' && <button className="btn btn-outline btn-ghost px-8" onClick={() => signOut()}>Logout</button>} */}
        </div>
      </div>
      
{/* secoend nabbar */}
      <div className="bg-[#131921] py-2 border-b border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center lg:gap-10 md:gap-10 justify-between">
          <div>
            <Link href={"/"} className="text-3xl font-bold">
              TouristMart
            </Link>
          </div>
          <div className="lg:w-full md:w-[55%] mt-2 md:mt-0">
            <Search />
          </div>
          <div className="flex items-center space-x-4">
            <p className="bg-[#8dbe3f] p-2 rounded-full text-gray-800 hover:bg-[#5C8121] hover:text-yellow-50"><IoCartOutline className="text-xl" /></p>
            <p><span>0</span> <br />Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "MyBookings",
    path: "/my-bookings",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
];
export default Navbar;
