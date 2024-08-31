import Image from "next/image";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
const SoppingProductCart = ({ product }) => {
  const { coverImage, currentPrice, name, price } = product;
  return (
    <div className="flex space-x-5">
      <div className="space-x-5">
        <Image
          src={coverImage}
          height={500}
          width={500}
          priority
          className="h-32 w-40"
        ></Image>
      </div>
      <div className="w-full">
        <div className="flex justify-between  items-center">
          <p>{name}</p>
          <button>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoppingProductCart;
