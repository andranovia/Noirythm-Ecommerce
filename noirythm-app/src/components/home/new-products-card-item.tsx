"use client";

import React from "react";
import Image from "next/image";
import ProductItem from "../product/product-item";

interface ProductItemProps {
  Product: ProductItem;
}

const NewProductsCardItem: React.FC<ProductItemProps> = ({ Product }) => {
  return (
    <div className={` flex justify-center items-end w-full h-full  relative`}>
      <div
        className={`flex flex-col gap-2 justify-center items-end w-full h-full px-5`}
      >
        <Image
          src={Product.product_image}
          alt=""
          width={500}
          height={500}
          className={`relative min-h-[24rem] max-h-[24rem] w-full h-full object-cover  `}
        />
        <div className="flex flex-col gap-2 items-start relative z-10 w-full ">
          <span className=" font-normal text-sm capitalize">
            {Product.product_name}
          </span>
          <span className=" font-normal text-sm capitalize">
            $ {Product.product_price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewProductsCardItem;
