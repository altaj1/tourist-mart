"use client";
import useAxiosCommon from '@/lib/hooks/apiHooks/useAxiosCommon';
import { spotCategories } from '@/lib/spotCategories/spotCategories';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import Paginatio from '../shared/Paginatio';

const ProductCategories = ({ categoriesId }) => {
  const reduxData = useSelector((state)=>state)
  const search = reduxData?.search?.value;
  const currentPage = reduxData?.pagination?.value;
  console.log(reduxData?.pagination?.value," redux text")
  const axiosCommon = useAxiosCommon();
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [categoresProduct, SetCategoresProduct] = useState("");
  const [categoresItem, setCategoresItem] = useState("");
  // const [currentPage, setCurrentPage] = useState(0);
  // const [itemsPerPage, setItemsPerPage] = useState(12);
  // const [count, setCount] = useState(0);
  const { subcategories } = spotCategories.find((spot) => spot.id == categoriesId);
  // const numberOfPages = Math.ceil(count / itemsPerPage);
  // const pages = [...Array(numberOfPages).keys()];

  const handleCheckboxChange = (event, idx) => {
    const checked = event.target.value;
     SetCategoresProduct(checked);
    setCheckedCategory(checkedCategory === idx ? null : idx); // Toggle the selected category
  };
  const {data: Product = [], isLoading, refetch} = useQuery({
    queryKey:["categorisData", categoresItem, categoresProduct, search, currentPage],
    queryFn: async ()=>{
            const {data} = await axiosCommon.get(`/categores/api/${categoriesId}?categoresItem=${categoresItem}&categoresProduct=${categoresProduct}&search=${search}&page=${currentPage}`)
            console.log(data, "this is data")
            return data
    }
  })
  const handleCheckboxItem = (event, idx) => {
    const item = event.target.value;
    refetch()
    setCategoresItem(item)
    
  };

  // console.log(Product);
  
  return (
    <div className='container mx-auto'>
    <div>  
      <div>
      <h1 className="text-xl font-semibold">Product Category</h1>
      {subcategories.map((category, idx) => (
        <form key={idx}>
          <input
            type="checkbox"
            id={`checkbox-${idx}`}
            name="category"
            value={category.name}
            onChange={(event) => handleCheckboxChange(event, idx)}
            checked={checkedCategory === idx}
          />
          <label htmlFor={`checkbox-${idx}`}>{category.name}</label>
          {/* Items */}
          <div className={`${checkedCategory !== idx && 'hidden'} pl-5`}>
            {category.items.map((item, itemIdx) => (
              <div key={itemIdx} action="">
                <input
                  type="checkbox"
                  id={`item-checkbox-${itemIdx}`}
                  name="item"
                  value={item}
                  onChange={(event) => handleCheckboxItem(event, itemIdx)}
                />
                <label htmlFor={`item-checkbox-${itemIdx}`}>{item}</label>
              </div>
            ))}
          </div>
        </form>
      ))}
      </div>
      {/* product cart */}
      <div></div>
      </div>
       {/* pagination */}
       <Paginatio></Paginatio>
       {/* <div className="pagination join flex items-center justify-center p-16">
        <button
          className="flex items-center justify-center gap-1 mr-4"
          onClick={handlePrevPage}
        >
          <GrLinkPrevious /> Prev
        </button>
        <div className="text-2xl space-x-6">
          {pages.map((page) => (
            <button
              className={`${
                currentPage == page
                  ? "bg-[#5B8021] text-yellow-50 w-10 rounded-full"
                  : ""
              } `}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          className="flex items-center justify-center gap-1 ml-4"
          onClick={handleNextPage}
        >
          Next <GrLinkNext />
        </button>
      </div> */}
    </div>
  );
};

export default ProductCategories;
