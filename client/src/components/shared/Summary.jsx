import { Dai_Banna_SIL } from "next/font/google";
import Link from "next/link";
import React from "react";

const Summary = ({ summary }) => {
  const subtotal = summary?.reduce(
    (acc, pd) => parseInt(acc) + parseInt(pd.price),
    0
  );
  return (
    <div className="w-[30%] pl-16 pr-16 space-y-2 shadow-lg bg-[#FFFFFF]">
      <h1 className="text-2xl font-semibold">Summary</h1>
      <div>
        {summary?.map((pd) => (
          <div className=" ">
            <p className="flex justify-between items-center">
              <span>{pd?.name}</span>
              <span>{pd?.price} BDT</span>
            </p>
          </div>
        ))}
      </div>
      <hr />
      <p className="flex justify-between items-center">
        <span>Subtotal({summary.length}) </span> <span>{subtotal} BDT</span>
      </p>
    <p className=" pt-4"> 
         <Link href={'/'} className=" text-gray-800 bg-[#8dbe3f]  py-3 pr-5 rounded-r-lg pl-4 hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out">
        PROCEED TO CHECKOUT({summary.length})
      </Link></p>
    </div>
  );
};

export default Summary;
