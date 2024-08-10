"use client";
import { spotCategories } from "@/lib/spotCategories/spotCategories";
import React, { useState } from "react";

const AddProduct = () => {
  const [checked, setChecked] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedSpotName, setSelectedSpotName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleSelectCategory = (e) =>{
    const selectedIndex = e.target.selectedIndex;
    const spot = spotCategories[selectedIndex - 1]; // Adjust for "Select" option at index 0
    // setSelectedSpotName(spot.category) when i finde this categoris product need id for home pages
    setSelectedSpot(spot.subcategories);
  }
  const handleSelectProduct = (e)=>{
    const selectedIndex = e.target.selectedIndex;
    const product = selectedSpot[selectedIndex -1];
    setSelectedProduct(product)
  }
  console.log(selectedProduct, "this is select spot")
  return (
    <>
      <div>
        <h3>Add New Product</h3>
      </div>
      <div>
        <form
          action=""
          className="flex justify-between text-gray-800 items-center gap-5 container mx-auto"
        >
          <div className="bg-[#F9F9F9]  w-[65%] space-y-4">
            <h1 className="font-samibold">General Information</h1>
            <div className="flex flex-col pl-5 pr-5">
              <label htmlFor="">Name Product</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                required
                name="name"
                className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
              />
            </div>
            <div className="flex flex-col pl-5 pr-5">
              <label htmlFor="">Description Produce</label>
              <textarea
                className="h-20 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                placeholder="Enter Product Description"
                name="description"
                id=""
              ></textarea>
            </div>
            {/* categoris */}
            <div className="flex justify-between p-5 gap-4">
             
              <div className="w-[50%] ">
              <h1>Spot Category</h1>
                <select
                  className="bg-base-200 p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
                  onChange={handleSelectCategory}
                >
                  <option value="">Select</option>
                  {spotCategories?.map((spot, index) => (
                    <option
                      key={index}
                      className="selection:bg-gray-800 hover:cursor-pointer"
                      value={spot.category} // Keep value for form submission if needed
                    >
                      {spot.category}
                    </option>
                  ))}
                </select>
              </div>
              {/* product category */}
              <div  className="w-[50%] ">
              <h1>Product Category</h1>
                <select
                  className="bg-base-200 p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
                  onChange={handleSelectProduct}
                >
                  <option value="">{selectedSpot? "Select": ""}</option>
                  {selectedSpot?.map((product, index) => (
                    <option
                      key={index}
                      className="selection:bg-gray-800 hover:cursor-pointer"
                      value={product.name} // Keep value for form submission if needed
                    >
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* items */}
            <div>
              {
                selectedProduct?.name == "Gadgets & Gear"? 
                <div>Gadgets & Gear</div>
                :
                // outhers
                <div>this is outhers</div>
              }
            </div>
          </div>
          {/* upload img */}
          <div className="bg-[#c45050] h-96 w-[30%]"></div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
