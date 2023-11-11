
import PromoProduct from '@/components/Product/PromoProduct/PromoProduct';
import React from 'react';

const PromoProductCategory = ({isMobile}:any) => {







  const maxItemsToShow = isMobile? 2 : 4;




  return (
    <div className="">
      <PromoProduct
        maxItems={maxItemsToShow}
        className={'h-[11vh] w-[11vh]  mb-5'}
        desc={false}
      />
    </div>
  );
};

export default PromoProductCategory;
