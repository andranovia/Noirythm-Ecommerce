import React from 'react';
import dynamic from 'next/dynamic';
const CategoryCardComponent = dynamic(() => import('../category-section/category-app-home'));
const CarouselComponent= dynamic(() => import('../carousel-section/carousel-app-image'));


export default function ContainerCarouselCategComponent() {
  const categories = [
    {
      id: 'All',
      image: 'https://img.icons8.com/material-outlined/24/show-all-views.png',
      title: 'See all',
      description: 'Where you can find all the things',
    },
    {
      id: 'cloth',
      image: 'https://img.icons8.com/ios/50/clothes.png',
      title: 'Cloth',
      description: 'Let the world knows',
    },
    {
      id: 'jackets',
      image: 'https://img.icons8.com/sf-regular/48/jacket.png',
      title: 'Jackets',
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
    <div className="sm:flex sm:justify-center mb-10">
      <div className="sm:grid sm:grid-cols-2 sm:w-[full] ">
        <CarouselComponent/>
        <div className="flex flex-col justify-center">
          <CategoryCardComponent categories={categories} />
        </div>
      </div>
    </div>
  );
}
