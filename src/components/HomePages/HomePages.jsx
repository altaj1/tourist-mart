import React from 'react';
import Banner from './Banner/Banner';

const HomePages = () => {
    console.log(process.env.MONGODB_URI, 'this is mongo db uri')
    return (
        <div>
           <Banner></Banner>
        </div>
    );
};

export default HomePages;