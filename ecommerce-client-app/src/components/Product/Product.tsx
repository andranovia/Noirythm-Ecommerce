import React from 'react';
import CountdownTimer from './CountdownTimer';
import dynamic from 'next/dynamic';


const ClothProduct = dynamic(
  () => import('./ClothProduct')
);

const TrouserProduct = dynamic(
  () => import('./TrouserProduct')
);
const ShoesProduct = dynamic(
  () => import('./ShoesProduct')
);

const Product: React.FC = () => {
  const maxItemsToShow = 4;

  return (
    <div className="min-h-screen  overflow-hidden">
      <div className="container max-w-8xl mx-auto sm:max-w-7xl  ">
        <div className="bg-white pb-10   relative ">
          <div className="p-4">
            <section>
              <div className="relative right-auto ">
                <h1 className="text-2xl font-bold ml-7 z-20">Cloth product!</h1>
                <div className=" rounded-lg p-4 flex  w-[25rem]  items-center justify-start z-0 sm:w-full ">
                  <h1 className="text-1xl font-semibold ml-[16rem] absolute z-20 sm:text-1xl text-gray-900  ">
                    See more
                  </h1>

                  <div className="bg-gray-800 rounded-lg flex h-7 w-[15rem] my-2 p-2 flex-col justify-center ">
                    <CountdownTimer />
                  </div>  
                </div>
              </div>
              <ClothProduct maxItems={maxItemsToShow} className={''} desc={true}/>
            </section>
            <section className="mt-20">
              <div className="relative right-auto ">
                <h1 className="text-2xl font-bold ml-7 z-20">
                  Trouser product!
                </h1>
                <div className=" rounded-lg p-4 flex  w-[25rem]  items-center justify-start z-0 sm:w-full ">
                <h1 className="text-1xl font-semibold ml-[16rem] absolute z-20 sm:text-1xl text-gray-900  ">
                    See more
                  </h1>

                  <div className="bg-gray-800 rounded-lg flex h-7 w-[15rem] my-2 p-2 flex-col justify-center ">
                    <CountdownTimer />
                  </div> 
                </div>
              </div>
              <TrouserProduct maxItems={maxItemsToShow} desc={true} className={''}/>
            </section>
            <section className="mt-20">
              <div className="relative right-auto ">
                <h1 className="text-2xl font-bold ml-7 z-20">
                  Shoes product!
                </h1>
                <div className=" rounded-lg p-4 flex  w-[25rem]  items-center justify-start z-0 sm:w-full ">
                <h1 className="text-1xl font-semibold ml-[16rem] absolute z-20 sm:text-1xl text-gray-900  ">
                    See more
                  </h1>

                  <div className="bg-gray-800 rounded-lg flex h-7 w-[15rem] my-2 p-2 flex-col justify-center ">
                    <CountdownTimer />
                  </div> 
                </div>
              </div>
              <ShoesProduct maxItems={maxItemsToShow} desc={true} className={''}/>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
