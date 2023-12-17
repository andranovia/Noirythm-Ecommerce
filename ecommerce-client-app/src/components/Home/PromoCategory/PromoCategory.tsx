import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import PromoProductCategory from './PromoProductCategory';

const PromoCategory = () => {
  return (
    <div className="max-w-screen-lg  h-full sm:mb-20 mb-8 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold  m-4">Current Promo</h2>
      <div className="flex flex-col gap-6 rounded-lg ">
        <div className='w-fit h-fit flex justify-center  gap-10'>
        <Image
          src={'/img/category/promoImage_2.webp'}
          alt="Promo"
          height={420}
          width={420}
          className="rounded-md w-full sm:w-[30rem] "
        />
         <Image
          src={'/img/category/promoImage_1.webp'}
          alt="Promo"
          height={420}
          width={420}
          className="rounded-md w-full sm:w-[30rem]"
        />
        </div>
        <div className='flex justify-start mx-4 w-full items-center'>
          
          <PromoProductCategory/>
          <div className='relative bottom-3 -left-2  m-10 '>
          <Link href={'/promo/ProductPromo'}>
          <Image
            src={'https://img.icons8.com/metro/26/forward.png'}
            alt=""
            width={30}
            height={30}
            className='bg-white rounded-full w-9 p-2 hover:full hover:opacity-100 opacity-70 shadow-Aesthetic'
          />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCategory;
