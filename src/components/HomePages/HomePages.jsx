import React from 'react';
import Banner from './Banner/Banner';
import AddOffer from './AddOffer/AddOffer';


const HomePages = () => {
    // const count = useSelector((state) => state)
    // console.log(count)
    // console.log(process.env.NEXT_PUBLIC_MONGODB_URI, 'this is mongo db uri')
    return (
        <div>
           <Banner></Banner>
           <AddOffer></AddOffer>
        </div>
    );
};

export default HomePages;