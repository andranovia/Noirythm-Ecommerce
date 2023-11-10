import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Category {
  title: string;
  description: string;
  image: string;
}

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="border-gray-800 border-2 bg-white rounded-full p-2 flex h-15  overflow-hidden hover:sm:opacity-75">
        <div className="pr-4 sm:flex sm:flex-col sm:justify-center mx-2">
          <Image src={category.image} alt="" width={30} height={30} />
        </div>
        <div className="flex flex-col justify-center text-start">
        <h2 className="text-1xl font-semibold mb-2 max-h-40">
          {category.title}
        </h2>
        <div className={`${isMobile ? 'hidden' : ''}`}>
          <p className="text-gray-700">{category.description}</p>
        </div>  
      </div>
      </div>
 
    </div>
  );
};

export default CategoryItem;
