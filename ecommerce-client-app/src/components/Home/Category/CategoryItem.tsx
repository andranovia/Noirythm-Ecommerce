import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useResize } from '@/components/hooks/useResize';

interface Category {
  title: string;
  description: string;
  image: string;
}

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { isMobile } = useResize();

  return (
    <div>
      <div className="border-gray-800 border-2 justify-center bg-white rounded-lg  p-2 w-[4rem] flex h-15 sm:w-[15rem]  overflow-hidden hover:sm:opacity-75">
        <div className="sm:flex sm:flex-col sm:justify-center sm:mx-2 sm:pr-4 sm:w-12">
          <Image src={category.image} alt="" width={30} height={30} />
        </div>
        <div className="flex flex-col justify-center text-start">
          <h2
            className={`${
              isMobile ? `hidden` : 'text-1xl font-normal mb-2 max-h-40'
            }`}
          >
            {category.title}
          </h2>
          <div className={`${isMobile ? 'hidden' : 'visible'}`}>
            <p className="text-gray-700">{category.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
