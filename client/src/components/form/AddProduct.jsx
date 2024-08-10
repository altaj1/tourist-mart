"use client";
import { spotCategories } from "@/lib/spotCategories/spotCategories";
import React, { useRef, useState } from "react";

const AddProduct = () => {
  const [checked, setChecked] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedSpotName, setSelectedSpotName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkboxItem, setCheckboxItem] = useState("");
  const [features, setFeature] = useState([]);
  const featureInputRef = useRef(null);
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [checkboxSize, setCheckBoxSize] = useState([]);

  const handleSelectCategory = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const spot = spotCategories[selectedIndex - 1]; // Adjust for "Select" option at index 0
    // setSelectedSpotName(spot.category) when i finde this categoris product need id for home pages
    setSelectedSpot(spot?.subcategories);
  };
  const handleSelectProduct = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const product = selectedSpot[selectedIndex - 1];
    setSelectedProduct(product);
  };
  const handleCheckboxChange = (e, idx) => {
    const item = e.target.value;
    setCheckboxItem(item)
    setCheckedIndex(idx);
  };
  const handleFeature =(e)=>{
    const feature = e.target.value;
    setFeature([...features, feature])
    featureInputRef.current.value = '';
  }
  const handleCheckboxSize = (e)=>{
    const size = e.target.value;
    setCheckBoxSize([...checkboxSize, size])

  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const productData = {
      name:form.name.value,
    }
  }
  console.log(checkboxSize, "this is select  setFeature");
  return (
    <>
       {/* button */}
       
      <div>
      <form
          action=""
          className="container mx-auto"
        >
         <div className="flex justify-between items-center mb-5">
          <h3 className="font-semibold">Add New Product</h3>
          <button className="bg-[#8DBE3F] hover:bg-[#5B8021] px-4 py-2 rounded-xl hover:text-yellow-50 text-xs font-semibold">Add Product</button>
          </div>
          <div className="lg:flex md:flex justify-between text-gray-800 items-center gap-5 container mx-auto">
          <div className="bg-[#F9F9F9]  lg:w-[65%] md:w-[65%] space-y-4">
            <h1 className="font-samibold">General Information</h1>
            <div className="flex flex-col pl-5 pr-5 space-y-1">
              <label htmlFor="">Name Product*</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                required
                name="name"
                className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
              />
            </div>
            <div className="flex flex-col pl-5 pr-5 space-y-1">
              <label htmlFor="">Description Produce*</label>
              <textarea
                required
                className="h-20 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                placeholder="Enter Product Description"
                name="description"
                id=""
              ></textarea>
            </div>
             {/* barcode quantity */}
             <div className="lg:flex md:flex justify-between  pr-5 gap-4">
            <div className="flex flex-col pl-5 pr-5 space-y-1 lg:w-[50%] md:w-[50%]">
              <label htmlFor="">Barcode*</label>
              <input
                type="text"
                placeholder="Enter Product Barcode"
                required
                name="bracode"
                className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
              />
            </div>
            <div className="flex flex-col pl-5 pr-5 lg:w-[50%] md:w-[50%] space-y-1">
              <label htmlFor="">Quantity*</label>
              <input
                required
                className=" rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                placeholder="Enter Product Quantity"
                name="quantity"
                id=""
              />
            </div>
            </div>
            {/* categoris */}
            <div className="lg:flex md:flex justify-between pl-5 pr-5 gap-4">
              <div className="lg:w-[50%] md:w-[50%] space-y-1">
                <h1>Spot Category*</h1>
                <select
                  required
                  className=" p-2 w-full bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
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
              <div className="lg:w-[50%] md:w-[50%] space-y-1">
                <h1>Product Category*</h1>
                <select
                  required
                  className=" p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
                  onChange={handleSelectProduct}
                >
                  <option value="">{selectedSpot ? "Select" : ""}</option>
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
              {selectedProduct?.name == "Gadgets & Gear" ? (
                <div className="lg:flex md:flex space-y-2 gap-4 pl-5 pr-5">
                  <div className="lg:w-[50%] md:w-[50%]">
                    <h1>Product Items*</h1>
                    {selectedProduct?.items?.map((item, idx) => (
                      <div className="space-x-1">
                        <input
                          required
                          type="checkbox"
                          id={`checkbox-${idx}`}
                          name="item"
                          value={item}
                          onChange={(event) => handleCheckboxChange(event, idx)}
                          checked={checkedIndex === idx} 
                        />
                        <label htmlFor={`checkbox-${idx}`}>{item}</label>
                      </div>
                    ))}
                  </div>
                  <div className="flex lg:w-[50%] md:w-[50%] flex-col ">
                    <label htmlFor="">Product Features*</label>
                    <input
                      type="text"
                      placeholder="Enter Product Features"
                      required
                      name="feature"
                      onBlur={handleFeature}
                      ref={featureInputRef}
                      className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                    />
                  </div>
                </div>
              ) : (
                // outhers
                <div className="lg:flex md:flex space-y-2 gap-4 pl-5 pr-5">
                    <div className="lg:w-[50%] md:w-[50%]">
                    <h1>{selectedProduct?.items.length==3 ? "Gender*" : "Product Items*"}</h1>
                    {selectedProduct?.items?.map((item, idx) => (
                      <div className="space-x-1">
                        <input
                          required
                          type="checkbox"
                          id={`checkbox-${idx}`}
                          name="item"
                          value={item}
                          onChange={(event) => handleCheckboxChange(event, idx)}
                          checked={checkedIndex === idx} 
                        />
                        <label htmlFor={`checkbox-${idx}`}>{item}</label>
                      </div>
                    ))}
                  </div>
                    <div className="lg:w-[50%] md:w-[50%]">
                    <h1>Product Size*</h1>
                    {selectedProduct?.size?.map((size, idx) => (
                      <div className="space-x-1">
                        <input
                          required
                          type="checkbox"
                          id={`checkbox-${idx}`}
                          name="item"
                          value={size}
                          onChange={(event) => handleCheckboxSize(event, idx)}
                          
                        />
                        <label htmlFor={`checkbox-${idx}`}>{size}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* upload img */}
          <div className="bg-[#c45050] h-96 md:w-[30%] lg:w-[30%]"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
