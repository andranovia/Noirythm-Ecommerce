import React from "react";

import Link from "next/link";
import dynamic from "next/dynamic";

const CategoryItem = dynamic(() => import("./category-card-item"));

interface Category {
  id?: string;
  image: string;
  title: string;
  icon: string;
}

interface CategoryCardProps {
  categories: Category[];
}

const CategoryItemMemoized = React.memo(CategoryItem);

const CategoryCard: React.FC<CategoryCardProps> = ({ categories }) => {
  return (
    <div className="flex flex-col justify-center w-full max-w-[292px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 1xl:max-w-1xl 2xl:max-w-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4  items-center gap-2 1xl:gap-4 w-full">
        {categories.map((category, index) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <CategoryItemMemoized
              key={index}
              category={category}
              index={index}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
