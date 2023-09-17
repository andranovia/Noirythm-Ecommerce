'use client';

import React from 'react';

import CountdownTimer from './product-offsalecountdown-app';
import dynamic from 'next/dynamic';

const ClothProductComponent = dynamic(
  () => import('../../Home/cloth-product-section/cloth-product-app')
);

const ProductPageComponent: React.FC = () => {
  const maxItemsToShow = 4;
  return (
    <div className="min-h-screen">
      <div className="container max-w-8xl mx-auto sm:max-w-7xl ">
        <div className="bg-white  mb-4 relative">
          <h1 className="text-2xl font-semibold my-4 ml-7 absolute z-20">
            New Offer!
          </h1>
          <div className="bg-gray-200 rounded-lg p-4 flex h-[20vh] w-[25rem] absolute items-center justify-start z-0 sm:w-full ">
            <h1 className="text-1xl font-semibold mt-18 ml-[16rem] absolute z-20 sm:text-1xl  ">
              See more
            </h1>
            <div className="bg-amber-800 rounded-lg flex h-7 w-[15rem] my-2 p-2 flex-col justify-center ">
              <CountdownTimer />
            </div>
          </div>
          <div className="mt-[6rem] p-4 absolute">
            <ClothProductComponent maxItems={maxItemsToShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageComponent;
