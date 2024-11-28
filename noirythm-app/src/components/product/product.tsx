"use client";

import React from "react";
import ProductData from "./product-data";

const Product: React.FC = () => {
  const maxItemsToShow = 20;
  const productsType = ["cloth", "trouser", "shoe", "accessory"];

  return (
    <div className="bg-white min-h-screen w-full overflow-hidden py-16 flex flex-col justify-center items-center mb-2">
      {productsType.map((type, _) => {
        const productType = type[0].toUpperCase() + type.substring(1);

        return (
          <ProductData
            key={type}
            slider={true}
            maxItems={maxItemsToShow}
            productTypeFilter={type}
            className={null}
            desc={true}
            productType={productType}
          />
        );
      })}
    </div>
  );
};

export default Product;
