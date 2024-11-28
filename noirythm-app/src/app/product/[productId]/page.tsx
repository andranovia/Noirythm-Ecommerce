"use client";

import ProductInfo from "@/components/product/product-info";
import { getProductsInfo } from "@/service/methods/getProducts";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { data: productInfo, isFetching: productInfoLoading } = useQuery({
    queryKey: ["productInfo"],
    queryFn: () => getProductsInfo(params.productId),
  });

  return (
    <>
      <ProductInfo product={productInfo} isLoading={productInfoLoading} />
    </>
  );
};

export default ProductPage;
