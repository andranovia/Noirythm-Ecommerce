"use client";

import React from "react";
import Image from "next/image";

interface Category {
  title: string;
  image: string;
  icon: string;
}

interface CategoryItemProps {
  category: Category;
  index: number;
}

const CategoryCardItem: React.FC<CategoryItemProps> = ({ category, index }) => {
  return (
    <div
      className={`overflow-hidden  flex justify-center items-end w-full h-full min-h-[24rem] relative`}
    >
      <div className={`flex justify-center items-end w-full h-full px-5`}>
        <Image
          src={category.image}
          alt=""
          width={500}
          height={500}
          className={`absolute w-full h-full object-cover  `}
        />
        <div className="flex justify-between items-center relative z-10 w-full -top-5">
          <span className="text-white font-medium text-sm capitalize">
            {category.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardItem;
