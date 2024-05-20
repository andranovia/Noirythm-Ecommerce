import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useProduct } from "@/hooks/useProduct";

const NavbarResult = dynamic(() => import("./navbar-result"));

type ProductItem = {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: number;
  promo_text: string;
};

const NavbarSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { productsSearch, isSearchResultsVisible } = useProduct(searchQuery);

  return (
    <div className="">
      <div ref={inputRef} className="flex justify-center  mt-2 lg:w-[54rem]">
        <div className="absolute inset-y-0 left-2 flex results-center pointer-events-none">
          <Image
            src="https://img.icons8.com/ios/50/search--v1.png"
            width={20}
            height={10}
            alt=""
            className="w-6 h-6 relative top-4"
          />
        </div>
        <input
          type="text"
          className="border-gray-500 border-2 p-2 w-full h-full pl-10 pr-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 bg-white sm:text-sm"
          placeholder="Summer cloth..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {isSearchResultsVisible && (
        <div className="fixed bg-white w-full h-[32rem] left-0 lg:top-16 right-0 lg:w-[56rem] rounded-md sm:left-[18%] sm:h-fit ">
          {productsSearch?.slice(0, 4).map((result: ProductItem) => (
            <Link
              href={{
                pathname: `/product/${result.id}`,
              }}
              key={result.id}
            >
              <NavbarResult key={result.id} result={result} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
