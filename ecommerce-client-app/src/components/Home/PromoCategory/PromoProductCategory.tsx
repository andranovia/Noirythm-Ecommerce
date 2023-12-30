
import PromoProduct from '@/components/product/PromoProduct';
import { useResize } from '@/components/hooks/useResize';
import React from 'react';

const PromoProductCategory = () => {
    const {isMobile} = useResize();


  const maxItemsToShow = isMobile? 2 : 4;

  return (
    <div className="">
      <PromoProduct
        maxItems={maxItemsToShow}
        className={'h-[11vh] w-[11vh] sm:w-20  mb-5 flex'}
        desc={false}
      />
    </div>
  );
};

export default PromoProductCategory;
