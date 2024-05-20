'use client'

import React from "react";
import dynamic from "next/dynamic";
import { useProduct } from "@/hooks/useProduct";

const ProductCard = dynamic(() => import("@/components/product/product-card"));

interface ProductProps {
  maxItems?: number;
  className: string | {} | null;
  desc: boolean;
  productTypeFilter?: string;

}

interface ProductItem {
  id: string;
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  product_type: string;
  promo_text: string;
  average_rating: number;
}

const ProductData: React.FC<ProductProps> = ({
  maxItems,
  className,
  desc,
  productTypeFilter,

}) => {
  const { productsPromo, products, isLoading } = useProduct();

  
  const selectedProduct = productTypeFilter === 'promo' ? productsPromo : products;

 
  const filteredItems = productTypeFilter && productTypeFilter !== 'all' && productTypeFilter !== 'promo' 
    ? selectedProduct?.filter(
        (item: ProductItem) => item?.product_type === productTypeFilter
      )
    : selectedProduct;
  

  const displayedItems = maxItems
    ? filteredItems?.slice(0, maxItems)
    : filteredItems;

  return (
    <ProductCard
      isLoading={isLoading}
      ProductItems={displayedItems}
      className={className}
      desc={desc}
    />
  );
};

export default ProductData;
