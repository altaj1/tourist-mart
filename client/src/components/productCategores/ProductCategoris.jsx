"use client";
import useAxiosCommon from '@/lib/hooks/apiHooks/useAxiosCommon';
import { spotCategories } from '@/lib/spotCategories/spotCategories';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductCategories = ({ categoriesId }) => {
  const reduxData = useSelector((state)=>state.search)
  // console.log(reduxData.value," redux text")
  const search = reduxData.value
  const axiosCommon = useAxiosCommon();
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [categoresProduct, SetCategoresProduct] = useState("");
  const [categoresItem, setCategoresItem] = useState("");
  const { subcategories } = spotCategories.find((spot) => spot.id == categoriesId);

  const handleCheckboxChange = (event, idx) => {
    const checked = event.target.value;
     SetCategoresProduct(checked);
    setCheckedCategory(checkedCategory === idx ? null : idx); // Toggle the selected category
  };
  const {data: Product = [], isLoading, refetch} = useQuery({
    queryKey:["categorisData", categoresItem, categoresProduct, search],
    queryFn: async ()=>{
            const {data} = await axiosCommon.get(`/categores/api/${categoriesId}?categoresItem=${categoresItem}&categoresProduct=${categoresProduct}&search=${search}`)
            console.log(data)
            return data
    }
  })
  const handleCheckboxItem = (event, idx) => {
    const item = event.target.value;
    refetch()
    setCategoresItem(item)
    
  };
  console.log(Product);
  
  return (
    <div className='container mx-auto'>
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
      
    </div>
  );
};

export default ProductCategories;
