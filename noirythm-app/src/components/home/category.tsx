import React from 'react';
import CategoryCard from './category-card';
import CategoryPromo from './category-promo';

export default function Category() {
  const categories = [
    {
      id: 'all',
      image: 'https://img.icons8.com/ios-filled/50/192655/show-all-views.png',
      title: 'See Alls',
      description: 'All the things',
    },
    {
      id: 'cloth',
      image: 'https://img.icons8.com/ios/50/192655/clothes.png',
      title: 'Cloths',
      description: 'Get your cloths',
    },
    {
      id: 'trouser',
      image:
        'https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/192655/external-clothes-clothes-accessories-outline-bartama-outline-64-bartama-graphic-2.png',
      title: 'Trousers',
      description: 'Get your trousers',
    },
    {
      id: 'shoe',
      image: 'https://img.icons8.com/ios/50/192655/sneakers.png',
      title: 'Shoes',
      description: 'Get your shoes',
    },
  ];
  return (
    <div className="w-full h-fit sm:flex sm:justify-center sm:flex-col  bg-white rounded-md sm:max-w-screen-xl p-6  mx-auto -mt-4 sm:-mt-10 mb-8  overflow-hidden ">
      <div className="flex justify-center items-center ">
        <CategoryPromo />
      </div>
      <div className="flex  justify-center relative sm:top-4">
        <CategoryCard categories={categories} />
      </div>
    </div>
  );
}
