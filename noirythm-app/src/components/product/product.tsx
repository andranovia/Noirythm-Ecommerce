import React from "react";
import dynamic from "next/dynamic";
import ProductCountdown from "./product-countdown";
import Link from "next/link";

const ProductData = dynamic(() => import("@/components/product/product-data"));

const Product: React.FC = () => {
  const maxItemsToShow = 20;

  const productsType = ["cloth", "trouser", "shoe"];

  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col gap-10 justify-center items-center mb-20">
      {productsType.map((type, index) => {
        const productType = type[0].toUpperCase() + type.substring(1);;

        return (
          <React.Fragment key={index}>
            <div className="container">
              <div className="bg-white pb-10   relative ">
                <div className="lg:px-10 p-4  lg:py-6 flex flex-col gap-10">
                  <div className="relative flex  gap-6 items-end lg:justify-start justify-between  ">
                    <h1 className="text-2xl font-bold text-gray-600  z-20">
                      {productType}s Shopping
                    </h1>

                    <Link href={"/category/" + productType}>
                      <h1 className="text-md font-semibold  z-20 sm:text-1xl text-white bg-gray-900 p-2 rounded-lg cursor-pointer  ">
                        See More
                      </h1>
                    </Link>
                  </div>

                  <ProductData
                    maxItems={maxItemsToShow}
                    productTypeFilter={type}
                    className={null}
                    desc={true}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}

      
    </div>
  );
};

export default Product;
