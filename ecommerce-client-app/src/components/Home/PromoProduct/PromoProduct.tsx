import ClothProduct from '@/components/Product/ClothProduct/ClothProduct';
import React from 'react';

const PopularProduct = ({isMobile}:any) => {







  const maxItemsToShow = isMobile? 2 : 4;




  return (
    <div className="">
      <ClothProduct
        maxItems={maxItemsToShow}
        className={'h-[11vh] w-[11vh]  mb-5'}
        desc={false}
      />
    </div>
  );
};

export default PopularProduct;
