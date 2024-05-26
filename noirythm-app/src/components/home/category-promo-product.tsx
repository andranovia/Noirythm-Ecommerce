"use client";

import { useResize } from "@/hooks/useResize";
import React from "react";
import ProductData from "../product/product-data";

const CategoryPromoProduct = () => {
  const { isMobile } = useResize();

  const maxItemsToShow = isMobile ? 2 : 4;

  return (
    <>
      <ProductData
        productTypeFilter={"promo"}
        maxItems={maxItemsToShow}
        className={"h-[11vh] w-[11vh]  lg:w-[40vh]  mb-5 flex"}
        desc={false}
      />
    </>
  );
};

export default CategoryPromoProduct;
