import React from "react";
import Image from "next/image";
import ProductItem from "../product/product-item";

type NavbarSearchResultComponentProps = {
  result: ProductItem;
};

const NavbarResult: React.FC<NavbarSearchResultComponentProps> = ({
  result,
}) => {
  return (
    <div className="rounded-lg flex h-[12vh] w-full mt-6 relative  items-start lg:w-fit bg-white lg:mb-10 ">
      <div className=" flex-shrink-0 h-[10vh] w-[10vh] lg:w-[15vh] lg:h-[15vh] ">
        <Image
          src={result.product_image}
          alt={result.product_name}
          width={260}
          height={260}
          className="w-full h-full object-cover flex"
        />
      </div>
      <div className="text-start ml-3   ">
        <h4 className="text-lg font-light text-black">{result.product_name}</h4>
        <p className="text-base font-normal text-black">
          $ {result.product_price}
        </p>
      </div>
    </div>
  );
};

export default NavbarResult;
