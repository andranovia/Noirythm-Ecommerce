import React from 'react';
import PromoCategory from './PromoCategory';

const PromoData = ({isMobile}:any) => {
  return (
    <div className="flex justify-center items-center ">
      <PromoCategory isMobile={isMobile}/>
    </div>
  );
};
export default PromoData;
