"use client";

import { useResize } from "@/hooks/useResize";
import React from "react";
import ProductData from "../product/product-data";

const CategoryPromoProduct = () => {
  const { isMobile } = useResize();

  const maxItemsToShow = isMobile ? 2 : 4;

  return (
    <div className="">
      <ProductData
        productPromo={true}
        maxItems={maxItemsToShow}
        className={"h-[11vh] w-[11vh] sm:w-20  mb-5 flex"}
        desc={false}
      />
    </div>
  );
};

export default CategoryPromoProduct;
