import React from 'react';
import dynamic from 'next/dynamic';
const TrouserProduct = dynamic(() => import('@/components/product/TrouserProduct'));
const Navbar = dynamic(() => import('@/components/navbar/Navbar'));


const CategoryTrouserPage: React.FC = () => {


  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Navbar/>
      <div className="bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
        <p className="text-lg">
          Selected Category: <span className="text-blue-500">Clothing</span>
        </p>
       <TrouserProduct className={''} desc={true}/>
      </div>
    </div>  
  );
};

export default CategoryTrouserPage;
