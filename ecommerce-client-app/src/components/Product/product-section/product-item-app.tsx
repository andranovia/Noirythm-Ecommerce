import React from 'react';
import { ColorRing } from 'react-loader-spinner';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
}

interface ProductItemCardProps {
  item: ProductItem;
  loading: boolean;
}

const ProductItemCardComponent: React.FC<ProductItemCardProps> = ({ item, loading}) => {
  return (
    <div className="rounded-lg flex flex-col items-start lg:w-full shadow-md bg-white">
      <div className=" flex-shrink-0 h-[20vh] w-[20vh] lg:w-[40vh] lg:h-[40vh] ">
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#8b8b8b', '#fafafa', '#c7b1b1', '#8c7070', '#856b6b' ]} 
          />
        ) : (
          <img
            src={item.product_image}
            alt={item.product_name}
            className="w-full h-full object-cover flex rounded-lg "
          />
        )}
   
      </div>
      <div className="text-start mt-4 ml-3 p-3  ">
        <h4 className="text-lg font-light text-black">{item.product_name}</h4>
        <p className="text-base font-bold text-black">{item.product_price}</p>
        <div className="bg-amber-800 rounded-lg flex h-7 w-[6rem] my-2 p-2 flex-col justify-center">
          <h2 className="font-semibold text-yellow-100">70% price</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCardComponent;
