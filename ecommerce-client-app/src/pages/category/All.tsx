import dynamic from 'next/dynamic';
import React from 'react';
const Navbar = dynamic(
  () => import('@/components/Navbar/Navbar')
);
const ClothProductComponent = dynamic(() => import('@/components/Product/ClothProduct/ClothProduct'));
const ShoesProductComponent = dynamic(() => import('@/components/Product/ShoesProduct/ShoesProduct'))
const TrouserProductComponent = dynamic(() => import('@/components/Product/TrouserProduct/TrouserProduct'))


const AllCategory: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center sm:w-screen">
      <Navbar/>
      <div className="bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
        <p className="text-lg">
          Selected Category: <span className="text-blue-500">All Category</span>
        </p>
        <ClothProductComponent/>
        <ShoesProductComponent/>
        <TrouserProductComponent />
      </div>
    </div>
  );
};
export default AllCategory;
