
"use client"
import Banner from './Banner/Banner';
import AddOffer from './AddOffer/AddOffer';
import SpotCategories from './SpotCatgories/SpotCategories';
import { useEffect } from 'react';


const HomePages = () => {
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('http://localhost:3005/hello');
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const data =  response
    //         console.log(data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
    return (
        <div>
           <Banner></Banner>
           <AddOffer></AddOffer>
           <SpotCategories></SpotCategories>
        </div>
    );
};

export default HomePages;