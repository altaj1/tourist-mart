"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


export const useGetData = () => {
    const [categoris, setCategoris] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('/CategoryData/categoryData.json')
        .then(res=>res.json())
        .then(data=> setCategoris(data))
        
      },[])
      return categoris
    
};

export default useGetData;