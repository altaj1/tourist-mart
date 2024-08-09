import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import { useSession } from "next-auth/react";

const useRole = () =>{
    const axiosSecure = useAxiosSecure();
    const session = useSession()
  
    const {data:role = "", isLoading} = useQuery({
        queryKey:['role'],
        enabled: !!session?.data?.user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/manage-users/api/${session?.data?.user?.email}`)
            return data.resp.role;
        }
    })
    
    return {role, isLoading}
}

export default useRole