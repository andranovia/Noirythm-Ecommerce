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
    <div className="shadow-ShadowCard rounded-lg p-4 flex h-15 w-[10rem] sm:h-[6rem] sm:w-[15rem] overflow-hidden hover:sm:opacity-75">
      <div className="pr-4 sm:flex sm:flex-col sm:justify-center">
        <Image src={category.image} alt="" width={48} height={48}  />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-1xl font-semibold mb-2 max-h-40">
          {category.title}
        </h2>
        <div className={`${isMobile ? 'hidden' : 'block'}`}>
          <p className="text-gray-700">{category.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
