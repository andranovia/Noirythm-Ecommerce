import React from 'react';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const CategoryItem = dynamic(() => import('./category-card-item'));

interface Category {
  id?: string;
  image: string;
  title: string;
  description: string;
}

interface CategoryCardProps {
  categories: Category[];
}

const CategoryItemMemoized = React.memo(CategoryItem);

const CategoryCard: React.FC<CategoryCardProps> = ({ categories }) => {
  return (
    <div className="flex flex-col justify-center mb-10 sm:mt-[-20px] sm:ml-10">
      <div className="grid grid-cols-4 gap-4 sm:gap-10">
        {categories.map((category, index) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <CategoryItemMemoized key={index} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
