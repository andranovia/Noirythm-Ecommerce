import React from 'react';
import CountdownTimer from './CountdownTimer';
import dynamic from 'next/dynamic';
import ProductData from '@/components/Product/ProductData';


const Product: React.FC = () => {
  const maxItemsToShow = 20;

  

  return (
    <div className="min-h-screen  overflow-hidden">
      <div className="container max-w-8xl mx-auto sm:max-w-7xl  ">
        <div className="bg-white pb-10   relative ">
          <div className="p-4">
            <section>
              <div className="relative right-auto ">
                <h1 className="text-2xl font-bold ml-7 z-20">Our Products!</h1>
                <div className=" rounded-lg p-4 flex  w-[25rem]  items-center justify-start z-0 sm:w-full ">
                  <h1 className="text-1xl font-semibold ml-[16rem] absolute z-20 sm:text-1xl text-gray-900  ">
                    See more
                  </h1>

                  <div className="bg-gray-800 rounded-lg flex h-7 w-[15rem] my-2 p-2 flex-col justify-center ">
                    <CountdownTimer />
                  </div>
                </div>
              </div>
              <ProductData
                maxItems={maxItemsToShow}
                className={''}
                desc={true}
              />
            </section>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
