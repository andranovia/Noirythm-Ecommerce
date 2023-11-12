import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import PromoProductCategory from './PromoProductCategory';

const PromoCategory = ({isMobile}:any) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold  m-4">Current Promo</h2>
      <div className="flex flex-col gap-6 rounded-lg shadow-Aesthetic">
        <Image
          src={'/img/promo/promo1.webp'}
          alt="Promo"
          height={420}
          width={420}
          className="rounded-md w-full sm:w-[35rem]"
        />
        <div className='flex justify-start mx-4 w-full items-center'>
          
          <PromoProductCategory isMobile={isMobile}/>
          <div className='relative bottom-3 -left-2 '>
          <Link href={'/promo/ProductPromo'}>
          <Image
            src={'https://img.icons8.com/metro/26/forward.png'}
            alt=""
            width={30}
            height={30}
            className='bg-white rounded-full w-8 p-2 hover:w-9 hover:opacity-80 opacity-80 shadow-Aesthetic'
          />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCategory;
