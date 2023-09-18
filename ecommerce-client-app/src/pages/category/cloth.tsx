import React from 'react';
import dynamic from 'next/dynamic';
const ClothProductComponent = dynamic(() => import('@/components/Product/cloth-product-section/cloth-product-app'));
const NavbarComponent = dynamic(() => import('@/components/navbar-section/navbar-app'));


const CategoryClothPage: React.FC = () => {


  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center sm:w-screen">
      <NavbarComponent/>
      <div className="bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
        <p className="text-lg">
          Selected Category: <span className="text-blue-500">Clothing</span>
        </p>
       <ClothProductComponent/>
      </div>
    </div>
  );
};

export default CategoryClothPage;