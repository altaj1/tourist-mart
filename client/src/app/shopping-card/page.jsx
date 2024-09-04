"use client";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import Summary from "@/components/shared/summary";
import SoppingProductCart from "@/components/soppingProductCart/SoppingProductCart";
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const page = () => {
  const [summary, setSummary] = useState([]);
  const [buyProduct, setBuyProduct] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const handelProductDelet =async (id) => {
    console.log(id);
    try {
        const resp = await axiosSecure.delete(`/shopping-card/api/delete/${id}`)
        if (resp?.data?.deletedCount> 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            refetch()
        }
     
    } catch (error) {
        console.log(error)
    }

  };

  const {
    data: cartsData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["soppingCartProduct", session?.user.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/shopping-card/api/${session?.user.email}`
      );
      return data.data;
    },
    enabled: !!session?.user.email,
  });
 useEffect(()=>{
  const storeSummary = localStorage.getItem('product')
  if (storeSummary) {
  setSummary(JSON.parse(storeSummary))
    
  }
  // console.log(storeSummary)
 },[buyProduct])
  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (status === "unauthenticated" || !session?.user) {
      setUserLoading(false);
      router.push("/login");
    } else {
      setUserLoading(true);
    }
  }, [session?.data?.user, userLoading]);
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
console.log(summary)
  return (
    <div className="mx-auto container">
      {/* thsi is shopping cart pages */}
      <div className="flex">
        {/* Cart */}
        <div className="w-[70%]">
          {cartsData?.map((product, idx) => (
            <SoppingProductCart
              key={product._id}
              product={product}
              cartsData={cartsData}
              buyProduct={buyProduct}
              setBuyProduct={setBuyProduct}
              
              handelProductDelet={handelProductDelet}
            ></SoppingProductCart>
          ))}
        </div>
        {/* Summary */}
        <div>
          <p>{summary.length}</p>
          <Summary ></Summary>
        </div>
      </div>
      {/* More to love */}
      <div></div>
    </div>
  );
};

export default page;
