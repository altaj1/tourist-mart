import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
       <div className='bg-gradient-to-r from-[#344617] to-[#5b792b]'>
         <div className="bg-[url('/images/sp_online_phone82_generated-removebg-preview.png')] lg:h-[600px] md:h-[600px] bg-cover bg-no-repeat flex items-center justify-center">
           <div className='lg:mb-40 lg:ml-36  '>
           <Image  priority height={800} width={800} className='md:ml-32 md:mb-5 sm:mb-5'  alt='sopping' src={'/images/istockphoto-1204923574-612x612-removebg-preview.png'}></Image>
           </div>
        </div>
       </div>
    );
};

export default Banner;