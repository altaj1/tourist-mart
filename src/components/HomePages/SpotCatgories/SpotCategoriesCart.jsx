"use client"
import Image from "next/image";
import React from "react";

const SpotCategoriesCart = ({ spot }) => {
  console.log(spot, " this is card");
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <Image
         src={spot.photo.src} // Use `spot.photo.src` here
         alt="categories"
         width={spot.photo.width} // Use `spot.photo.width` here
         height={spot.photo.height} // Use `spot.photo.height` here
         priority
         className="h-56 w-56 rounded-lg"
      />
      
    </div>
  );
};

export default SpotCategoriesCart;
