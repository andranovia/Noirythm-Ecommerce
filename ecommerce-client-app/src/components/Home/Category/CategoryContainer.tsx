import React from 'react';
import CategoryCard from './CategoryCard';
import PromoCategory from '../PromoCategory/PromoCategory';

export default function CategoryCarouselContainer() {
  const categories = [
    {
      id: 'All',
      image: 'https://img.icons8.com/material-outlined/24/show-all-views.png',
      title: 'See all',
      description: 'All the things',
    },
    {
      id: 'cloth',
      image: 'https://img.icons8.com/ios/50/clothes.png',
      title: 'Cloth',
      description: 'Get your cloth',
    },
    {
      id: 'trouser',
      image:
        'https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/external-clothes-clothes-accessories-outline-bartama-outline-64-bartama-graphic-2.png',
      title: 'Trouser',
      description: 'Get your trouser',
    },
    {
      id: 'shoes',
      image: 'https://img.icons8.com/ios/50/sneakers.png',
      title: 'Shoes',
      description: 'Get your shoes',
    },
  ];
  return (
    <div className="w-full h-fit sm:flex sm:justify-center sm:flex-col  bg-white rounded-md sm:max-w-screen-xl p-6  mx-auto -mt-4 sm:-mt-10 mb-8  overflow-hidden ">
      <div className="flex justify-center items-center ">
        <PromoCategory />
      </div>
      <div className="flex  justify-center relative sm:top-4">
        <CategoryCard categories={categories} />
      </div>
    </div>
  );
}
