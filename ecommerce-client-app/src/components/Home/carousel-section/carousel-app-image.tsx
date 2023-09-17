'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CarouselItemComponent = dynamic(() => import('./carousel-app-item'));


const CarouselComponent = () => {
    const slides = [
      {
        url: '/img/carousel/photo-1.avif',
      },
      {
        url: '/img/carousel/photo-2.avif',
      },
      {
        url: '/img/carousel/photo-3.avif',
      },

      {
        url: '/img/carousel/photo-4.avif',
      },
      {
        url: '/img/carousel/photo-5.avif',
      },
    ];

  return (
   <div>
    
    <CarouselItemComponent slides={slides} />
   </div>
  );
};

export default CarouselComponent;
