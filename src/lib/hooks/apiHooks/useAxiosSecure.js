import axios from 'axios'
import React from 'react'
export const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  })
export default function useAxiosSecure() {
  // axiosInstance.interceptors.request.use((config) => {
  //   const token = Cookies.get('token'); // adjust the key if your token cookie has a different name
  //   if (token) {
  //     config.headers['Authorization'] = `Bearer ${token}`;
  //   }
  //   return config;
  // }, (error) => {
  //   return Promise.reject(error);
  // });
  return axiosSecure
}
