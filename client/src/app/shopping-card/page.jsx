"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import SoppingProductCart from '@/components/soppingProductCart/SoppingProductCart';
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [buyProduct, setBuyProduct] = useState([]);
    const [userLoading, setUserLoading] = useState(true); 
    const axiosSecure = useAxiosSecure()
    const { data: session, status }= useSession() 
    const router = useRouter();

    const handelCheckOut = (product, isChecked) => {
        // e.preventDefault()
       
        if (isChecked) {
          const buyData = {
            ...product,
            productCartId: product._id,
            buyProductCount: buyProductCount,
          };
          delete buyData._id;  
          setBuyProduct([...buyProduct,buyData]);
        }
         else {
          setBuyProduct(
            buyProduct.filter((item) => item.productCartId !== product._id)
          );
        }
      };
    const handelProductDelet = (id) =>{
        console.log(id)
    }

    const {data: cartsData=[], isLoading, refetch} = useQuery({
        queryKey:["soppingCartProduct", session?.user.email],
        queryFn:async () =>{
            const {data} = await axiosSecure.get(`/shopping-card/api/${session?.user.email}`)
            return data.data
        },
        enabled: !!session?.user.email, 
    })
 
    useEffect(() => {
        if (status === 'loading') {
            return;
          }
          if (status === 'unauthenticated' || !session?.user) {
            setUserLoading(false);
            router.push("/login");
          } else {
            setUserLoading(true);
          }
      }, [session?.data?.user, userLoading]);
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
// console.log(cartsData)
    return (
        <div className='mx-auto container'>
            {/* thsi is shopping cart pages */}
            <div className='flex'>
                {/* Cart */}
                <div className='w-[70%]'>
                   {
                    cartsData?.map((product, idx)=><SoppingProductCart key={product._id} product={product} cartsData={cartsData} buyProduct ={buyProduct} setBuyProduct = {setBuyProduct} handelCheckOut={handelCheckOut} handelProductDelet={handelProductDelet} refetch={refetch}></SoppingProductCart>)
                   }
                </div>
                {/* Summary */}
                <div> Summary</div>
            </div>
            {/* More to love */}
            <div></div>
        </div>
    );
};

export default page;