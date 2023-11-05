import React from 'react';
import CategoryCard from '../Category/CategoryCard';
import CarouselData from '../Carousel/CarouselData';


export default function CategoryCarouselContainer() {
  const categories = [
    {
      id: 'All',
      image: 'https://img.icons8.com/material-outlined/24/show-all-views.png',
      title: 'See all',
      description: 'Find all the things',
    },
    {
      id: 'cloth',
      image: 'https://img.icons8.com/ios/50/clothes.png',
      title: 'Cloth',
      description: 'Let the world knows',
    },
    {
      id: 'trouser',
      image:
        'https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/external-clothes-clothes-accessories-outline-bartama-outline-64-bartama-graphic-2.png',
      title: 'Trouser',
      description: 'Warm down your cold',
    },
    {
      id: 'shoes',
      image: 'https://img.icons8.com/ios/50/sneakers.png',
      title: 'Shoes',
      description: 'Express yourself',
    },
  ];
  return (
    <div className="sm:flex sm:justify-center bg-white rounded-md sm:w-fit p-4 mx-auto -mt-4 sm:-mt-10 mb-8  overflow-hidden ">
      <div className="sm:grid sm:grid-cols-2 ">
      <div className="flex flex-col justify-center relative top-4">
          <CategoryCard categories={categories} />
        </div>
        <CarouselData />
       
      </div>
    </div>
  );
}
