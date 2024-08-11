"use client";
import { spotCategories } from "@/lib/spotCategories/spotCategories";
import React, { useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineFileDownloadDone } from "react-icons/md";

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
  const [coverImagePreview, setCoverImagePreview] = useState();

  const handleSelectCategory = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const spot = spotCategories[selectedIndex - 1]; // Adjust for "Select" option at index 0
    setSelectedSpotName(spot.category);
    setSelectedSpot(spot?.subcategories);
  };
  const handleSelectProduct = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const product = selectedSpot[selectedIndex - 1];
    setSelectedProduct(product);
    setCheckboxItem("");
    setCheckedIndex(null);
    if (product?.name == "Gadgets & Gear") {
      setCheckBoxSize([]);
    }
    if (product?.name !== "Gadgets & Gear") {
      setFeature([]);
    }
  };
  const handleCheckboxChange = (e, idx) => {
    const item = e.target.value;
    setCheckboxItem(item);
    setCheckedIndex(idx);
  };
  const handleFeature = (e) => {
    const feature = e.target.value;
    setFeature([...features, feature]);
    featureInputRef.current.value = "";
  };
  const handleCheckboxSize = (e) => {
    const size = e.target.value;
    setCheckBoxSize([...checkboxSize, size]);
  };

  const handleCoverImage = (image) => {
    setCoverImagePreview(URL.createObjectURL(image));
  };

  console.log(coverImagePreview, "this is data images");
  // console.log(checkboxItem, "this is data")
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productData = {
      name: form.name.value,
      description: form.description.value,
      bracode: form.bracode.value,
      quantity: form.quantity.value,
      SpotName: selectedSpotName,
      category: selectedProduct?.name,
      item: checkboxItem,
      size: checkboxSize,
      features: features,
    };
    console.log(productData, "this is product data");
  };

  return (
    <>
      {/* button */}

      <div>
        <form onSubmit={handleSubmit} action="" className="container mx-auto">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-semibold">Add New Product</h3>
            <button
              type="submit"
              className="bg-[#8DBE3F] hover:bg-[#5B8021] px-4 py-2 rounded-xl hover:text-yellow-50 text-xs font-semibold flex items-center gap-2"
            >
              <span className="font-bold text-sm">
                <MdOutlineFileDownloadDone />
              </span>{" "}
              <span>Add Product</span>
            </button>
          </div>
          <div className="lg:flex md:flex justify-between text-gray-800  gap-5 container mx-auto">
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
                            type="checkbox"
                            id={`checkbox-${idx}`}
                            name="item"
                            value={item}
                            onChange={(event) =>
                              handleCheckboxChange(event, idx)
                            }
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
                      <h1>
                        {selectedProduct?.items.length == 3
                          ? "Gender*"
                          : "Product Items*"}
                      </h1>
                      {selectedProduct?.items?.map((item, idx) => (
                        <div className="space-x-1">
                          <input
                            type="checkbox"
                            id={`checkbox-${idx}`}
                            name="item"
                            value={item}
                            onChange={(event) =>
                              handleCheckboxChange(event, idx)
                            }
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
            <div className=" md:w-[30%] lg:w-[30%]">
              {/* images */}
              <div className="bg-[#F9F9F9] h-96 p-5">
                <div>

                  <label className="flex flex-col items-center rounded-lg shadow-lg bg-[#FCF7F1]">
                    <input
                      type="file"
                      className="text-sm cursor-pointer w-36 hidden bg-slate-200"
                      name="image"
                      accept="image/*"
                      id="image"
                      onChange={(e) => handleCoverImage(e.target.files[0])}
                      hidden
                    />
                    <div className="h-64 object-cover rounded-lg  flex items-center justify-center">
                      {coverImagePreview ? (
                        <img className=" h-64 w-64 object-cover rounded-lg" src={coverImagePreview} />
                      ) : (
                        <p className="text-6xl opacity-50 ">
                          <span>
                            <IoIosAddCircleOutline />
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
