import React from 'react';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const CategoryItem = dynamic(() => import('./category-app-home-image'));

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

const CategoryCardComponent: React.FC<CategoryCardProps> = ({ categories }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="grid grid-cols-2 gap-5">
        {categories.map((category, index) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <CategoryItemMemoized key={index} category={category} />
            </React.Suspense>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCardComponent;
