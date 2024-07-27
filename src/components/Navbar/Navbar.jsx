"use client"
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import Search from "./Search";
const Navbar = () => {
  return (
    <div className="bg-[#232F3E] text-white">
    <div className="container mx-auto px-4 py-2">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Link href={'/'} className="text-lg font-medium">
          Gift Cards
        </Link>
        <Link href={'/'} className="text-lg font-medium">
          Tourist Mart Donates
        </Link>
        <div className="relative">
          <button className="text-lg font-medium">Help & Support</button>
          <ul className="absolute hidden bg-base-100 rounded-box shadow-lg top-full left-0 w-52 mt-1 z-10 group-hover:block">
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-end bg-slate-400 space-x-4">
          <Link href={'/login'} className="text-lg font-medium">
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
    </div>
  
    <div className="bg-[#131921] py-2 border-b border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <Link href={"/"} className="text-3xl font-bold">
          TouristMart
        </Link>
        <div className="w-full md:w-[55%] mt-2 md:mt-0">
          <Search />
        </div>
        <div className="flex items-center space-x-4">
          <IoCartOutline className="text-xl" />
          <a className="btn btn-outline btn-primary px-4 md:px-8">Appointment</a>
          {/* Uncomment if needed */}
          {/* <div>
            <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} className="rounded-full"/>
          </div> */}
          {/* {session?.status === 'loading' && <h6>Loading....</h6>}
          {session?.status === 'unauthenticated' && <Link href="/login" className="btn btn-primary px-8">Login</Link>}
          {session?.status === 'authenticated' && <button className="btn btn-outline btn-ghost px-8" onClick={() => signOut()}>Logout</button>} */}
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
