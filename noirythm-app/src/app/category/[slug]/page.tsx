'use client'

import dynamic from "next/dynamic";
import React, { FC } from "react";

const ProductData = dynamic(() => import("@/components/product/product-data"));


type CategoryProps = {
  params: {slug: string}
}

const Category = ({params}: CategoryProps) => {
  

  
  return (
    <div className="bg-gray-100 min-h-screen min-w-screen flex items-center justify-center ">
      <div className="bg-white py-4 px-4 lg:px-8 rounded-lg my-20 container">
        <h1 className="text-2xl font-semibold lg:mb-10 mb-8 ">{params.slug} Category </h1>
    
        <ProductData className={null} desc={true} productTypeFilter={params.slug.toLowerCase()} />
      </div>
    </div>
  );
};
export default Category;
