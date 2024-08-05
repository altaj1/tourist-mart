"use client";
import { spotCategories } from '@/lib/spotCategories/spotCategories';
import React, { useState } from 'react';

const ProductCategories = ({ categoriesId }) => {
  const [checkedCategory, setCheckedCategory] = useState(null);
  const { subcategories } = spotCategories.find((spot) => spot.id == categoriesId);

  const handleCheckboxChange = (event, idx) => {
    const checked = event.target.value;
    console.log(idx)
    setCheckedCategory(checkedCategory === idx ? null : idx); // Toggle the selected category
  };

  const handleCheckboxItem = (event, idx) => {
    const checked = event.target.value;
    console.log(checked);
  };

  return (
    <div className='container mx-auto'>
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
  );
};

export default ProductCategories;
