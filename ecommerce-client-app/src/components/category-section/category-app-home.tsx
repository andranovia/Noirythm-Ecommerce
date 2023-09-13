import React from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import CategoryItem from './category-app-home-image';
import Link from 'next/link';
import { FaTshirt, FaRegWindowRestore } from 'react-icons/fa';
import{ PiSneakerFill} from 'react-icons/pi'
import {GiSleevelessJacket} from 'react-icons/gi'

import 'swiper/css';

SwiperCore.use([Navigation, Pagination]);

interface Category {
  id?: string;
  image: JSX.Element; 
  title: string;
  description: string;
}

interface CategoryCardProps {
  categories: Category[];
}

const CategoryCardComponent: React.FC<CategoryCardProps> = () => {
  const categories = [
    {
      image: <FaRegWindowRestore/>, 
      title: 'See all',
      description: 'Where you can find all the things',
    },
    {
      id: 'cloth',
      image: <FaTshirt />,
      title: 'Cloth',
      description: 'Let the world knows',
    },
    {
      id: 'jackets',
      image: <GiSleevelessJacket/>,
      title: 'Jackets',
      description: 'Warm down your cold',
    },
    {
      id: 'shoes',
      image: <PiSneakerFill/>,
      title: 'Shoes',
      description: 'Express yourself',
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-5">
        {categories.map((category, index) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <CategoryItem key={index} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCardComponent;
