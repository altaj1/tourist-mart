"use client"
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    
    const {data : users = [],  isLoading,refetch } = useQuery({
        queryKey:['contest'],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/manage-users/api/get-all-users`)
            // console.log(data)
            return data;
        }
    })
    console.log(users)
    return (
        <div>
            this is manage user
        </div>
    );
};

export default ManageUsers;