import React from 'react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import Pagination from 'swiper';
import CategoryItem from './category-app-home-image';
import Link from 'next/link';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination]);
interface Category {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface CategoryCardProps {
  categories: Category[];
}

const CategoryCardComponent: React.FC<CategoryCardProps> = () => {
  
  const categories = [
    {

      image: './img/categ/all.png',
      title: 'See all',
      description: 'Where you can find all the things',
    },
    {
      id: 'cloth',
      image: './img/categ/cloth.png',
      title: 'Cloth',
      description: 'Let the world knows',
    },
    {
      image: './img/categ/jackets.png',
      title: 'Jackets',
      description: 'Warm down your cold',
    },
    {
      image: './img/categ/shoes.png',
      title: 'Shoes',
      description: 'Express yourself',
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-5">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category.id}`}
            key={category.id}
          >
            <CategoryItem key={index} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCardComponent;
