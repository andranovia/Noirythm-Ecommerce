"use client";

import ProductInfo from "@/components/product/product-info";
import { getProductsInfo } from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { data: productsInfo } = useQuery({
    queryKey: ["productInfo"],
    queryFn: () => getProductsInfo(params.productId),
  });

  return (
    <div>
      <ProductInfo product={productsInfo} />
    </div>
  );
};

export default ProductPage;
