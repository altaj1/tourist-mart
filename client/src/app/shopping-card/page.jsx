"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import SoppingProductCart from '@/components/soppingProductCart/SoppingProductCart';
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [userLoading, setUserLoading] = useState(true); 
    const axiosSecure = useAxiosSecure()
    const { data: session, status }= useSession() 
    const router = useRouter();
console.log(session?.user.email)
    const {data: cartsData=[], isLoading} = useQuery({
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
console.log(cartsData)
    return (
        <div className='mx-auto container'>
            {/* thsi is shopping cart pages */}
            <div className='flex'>
                {/* Cart */}
                <div className='w-[70%]'>
                   {
                    cartsData?.map((product, idx)=><SoppingProductCart key={product._id} product={product}></SoppingProductCart>)
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