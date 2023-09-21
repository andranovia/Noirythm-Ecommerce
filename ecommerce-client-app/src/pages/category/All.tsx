import dynamic from 'next/dynamic';
import React from 'react';
const NavbarComponent = dynamic(
  () => import('@/components/navbar-section/navbar-app')
);
const ClothProductComponent = dynamic(() => import('@/components/Product/cloth-product-section/cloth-product-app'));
const ShoesProductComponent = dynamic(() => import('@/components/Product/shoes-product-section/shoes-product-app'))
const TrouserProductComponent = dynamic(() => import('@/components/Product/trouser-product-section/trouser-product-app'))


const AllCategory: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center sm:w-screen">
      <NavbarComponent />
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
