"use client";

import ProductInfo from "@/components/product/product-info";
import { getProductsInfo } from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = ({ params }: ProductPageProps) => {

  
  const { data: productInfo, isLoading: productInfoLoading, isRefetching: productInfoRefetch } = useQuery({
    queryKey: ["productInfo"],
    queryFn: () => getProductsInfo(params.productId),
  });
  
  const loadingState = productInfoLoading || productInfoRefetch


  return (
    <div>
      <ProductInfo product={productInfo} isLoading={loadingState}/>
    </div>
  );
};

export default ProductPage;
