import React from 'react';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
}

interface ProductItemCardProps {
  item: ProductItem;
}

const ProductItemCard: React.FC<ProductItemCardProps> = ({ item }) => {
  return (
    <div className="rounded-lg flex flex-col items-start lg:w-full shadow-md bg-white">
      <div className=" flex-shrink-0 h-[20vh] w-[20vh] lg:w-[40vh] lg:h-[40vh] ">
        <img
          src={item.product_image}
          alt={item.product_name}
          className="w-full h-full object-cover flex rounded-lg "
        />
      </div>
      <div className="text-start mt-4 ml-3 p-3  ">
        <h4 className="text-lg font-light text-black">{item.product_name}</h4>
        <p className="text-base font-bold text-black">{item.product_price}</p>
        <div className="bg-amber-800 rounded-lg flex h-7 w-[6rem] my-2 p-2 flex-col justify-center">
            <h2 className='font-semibold text-yellow-100'>70% price</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
