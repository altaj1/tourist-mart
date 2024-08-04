"use client"
import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import AddOffer from './AddOffer/AddOffer';
import { useSelector } from 'react-redux';
import useGetData from '@/lib/getData/useGetData';


const HomePages = () => {
    const count = useSelector((state) => state)
   const data = useGetData()
    console.log(data, )
    
    return (
        <div>
           <Banner></Banner>
           <AddOffer></AddOffer>
        </div>
    );
};

export default HomePages;