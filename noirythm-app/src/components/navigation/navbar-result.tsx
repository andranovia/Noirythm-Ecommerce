import React from 'react';
import Image from 'next/image';

type ProductItem = {
  product_name: string;
  product_image: string;
  product_price: number;
  promo_text: string;
};

type NavbarSearchResultComponentProps = {
  result: ProductItem;
};

const NavbarResult: React.FC<NavbarSearchResultComponentProps> = ({
  result,
}) => {
  return (
    <div className="rounded-lg flex h-[12vh] w-full mt-6 relative left-10 items-start lg:w-fit bg-white lg:mb-10 ">
      <div className=" flex-shrink-0 h-[10vh] w-[10vh] lg:w-[15vh] lg:h-[15vh] ">
        <Image
          src={result.product_image}
          alt={result.product_name}
          width={260}
          height={260}
          className="w-full h-full object-cover flex rounded-lg "
        />
      </div>
      <div className="text-start ml-3   ">
        <h4 className="text-lg font-light text-black">{result.product_name}</h4>
        <p className="text-base font-bold text-black">{result.product_price}</p>
        <div
          className={
            result.promo_text
              ? `bg-gray-800 rounded-lg flex h-7 w-[6rem] my-2 p-2 flex-col justify-center`
              : ``
          }
        >
          <h2 className="font-semibold text-white">{result.promo_text}</h2>
        </div>
      </div>
    </div>
  );
};

export default NavbarResult;