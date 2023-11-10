import Image from 'next/image';
import React from 'react';
import PromoProduct from '../PromoProduct/PromoProduct';

const PromoCategory = ({isMobile}:any) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Current Promo</h2>
      <div className="flex flex-col gap-6 rounded-lg shadow-Aesthetic">
        <Image
          src={'/img/slider/slide1.webp'}
          alt="Promo"
          height={320}
          width={320}
          className="rounded-md w-full"
        />
        <div className='flex justify-start mx-4 w-full items-center'>
          
          <PromoProduct isMobile={isMobile}/>
          <div className='relative bottom-3 -left-2 '>
          <Image
            src={'https://img.icons8.com/metro/26/forward.png'}
            alt=""
            width={30}
            height={30}
            className='bg-white rounded-full w-8 p-2 hover:w-9 hover:opacity-80 opacity-80 shadow-Aesthetic'
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCategory;
