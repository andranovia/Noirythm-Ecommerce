'use client';

import React from 'react';
import CarouselSlides from './carousel-app-home';

const CarouselApp = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1661281366900-88b41445a004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1995&q=80',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1661510321796-7541c51a7fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    },
  ];

  return (
   <div>
    <CarouselSlides slides={slides} />
   </div>
  );
};

export default CarouselApp;
