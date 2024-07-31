import React from 'react'
export const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  })
export default function useAxiosSecure() {
  return axiosSecure
}
