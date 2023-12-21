
import dynamic from 'next/dynamic';
import React from 'react';
const Navbar = dynamic(
  () => import('@/components/navbar/Navbar')
);
const ClothProduct = dynamic(() => import('@/components/product/clothProduct/ClothProduct'));
const ShoesProduct = dynamic(() => import('@/components/product/shoesProduct/ShoesProduct'))
const TrouserProduct = dynamic(() => import('@/components/product/trouserProduct/TrouserProduct'))


const AllCategory: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center ">
      <Navbar/>
      <div className="bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
        <p className="text-lg">
          Selected Category: <span className="text-blue-500">All Category</span>
        </p>
        <ClothProduct className={''} desc={true}/>
        <ShoesProduct className={''} desc={true}/>
        <TrouserProduct className={''} desc={true}/>
      </div>
    </div>
  );
};
export default AllCategory;
