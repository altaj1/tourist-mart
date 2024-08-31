"use client"
import useAxiosSecure, { axiosSecure } from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
const page = ({params}) => {
    // console.log(params.id)
    const axiosS= useAxiosSecure()
    const {data:productDetails={}} = useQuery({
        queryKey:["detailsProduct"],
        queryFn: async()=>{
            const {data} = await axiosSecure(`/product-details/api/${params.id}`)
         
            return data?.data
        }
    })
    console.log(productDetails)
    return (
        <div>
            this is product details
        </div>
    );
};

export default page;