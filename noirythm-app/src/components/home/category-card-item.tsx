"use client";

import React from "react";
import Image from "next/image";
import { useResize } from "@/hooks/useResize";

interface Category {
  title: string;
  description: string;
  image: string;
}

interface CategoryItemProps {
  category: Category;
}

const CategoryCardItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <div>
      <div className="border-gray-800 border-2 justify-center bg-white rounded-lg  p-2 w-[4rem] flex h-15 md:w-[11rem] lg:w-[15rem]  overflow-hidden hover:sm:opacity-75">
        <div className="lg:flex lg:flex-col lg:justify-center md:flex md:items-center md:m-0 md:pr-0 lg:mx-2 lg:pr-4 sm:w-12">
          <Image src={category.image} alt="" width={30} height={30} />
        </div>
        <div className="flex flex-col justify-center text-start">
          <h2
            className={`hidden lg:block md:block text-1xl font-normal mb-2 max-h-40`}
          >
            {category.title}
          </h2>
          <div className={`hidden lg:block md:hidden`}>
            <p className="text-gray-700">{category.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardItem;
