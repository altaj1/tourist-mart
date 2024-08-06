import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const ShoppingCard = () => {
    return (
        <div className="flex items-center space-x-4">
        <p className="bg-[#8dbe3f] p-2 rounded-full text-gray-800 hover:bg-[#5C8121] hover:text-yellow-50"><IoCartOutline className="lg:text-xl md:text-xl" /></p>
        <p><span>0</span> <br />Cart</p>
      </div>
    );
};

export default ShoppingCard;