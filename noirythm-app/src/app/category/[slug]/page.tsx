'use client'

import dynamic from "next/dynamic";
import React, { FC } from "react";

const ProductData = dynamic(() => import("@/components/product/product-data"));


type CategoryProps = {
  params: {slug: string}
}

const Category = ({params}: CategoryProps) => {
  


  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Category {params.slug}</h1>
        <p className="text-lg">
          Selected Category: <span className="text-blue-500">{params.slug}</span>
        </p>
        <ProductData className={""} desc={true} productTypeFilter={params.slug} />
      </div>
    </div>
  );
};
export default Category;
