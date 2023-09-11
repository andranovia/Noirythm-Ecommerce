import React from 'react';

import CategoryApp from '../category-section/category-app-home';
import CarouselApp from '../carousel-section/carousel-app-image';

export default function ContainerCarouselCateg() {
 
  return (
    
    <div className="sm:flex sm:justify-center mb-10">
      <div className="sm:grid sm:grid-cols-2 sm:w-[full] ">
        <CarouselApp/>
        <div className='flex flex-col justify-center'>
        <CategoryApp />
        </div>
      </div>
    </div>
  );
}
