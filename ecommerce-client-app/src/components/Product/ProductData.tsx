import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { useProductContext } from '../context/productContext';

interface ClothProductProps {
  maxItems?: number;
  className: string | {} | null;
  desc: boolean;
  productTypeFilter?: string; 
}

const ProductData: React.FC<ClothProductProps> = ({ maxItems, className, desc, productTypeFilter }) => {
  const { productItems, loading } = useProductContext();

  const filteredItems = productTypeFilter
    ? productItems.filter((item) => item.product_type === productTypeFilter)
    : productItems;

  const displayedItems = maxItems === Infinity ? filteredItems : filteredItems.slice(0, maxItems);

  return (
    <ProductCard ProductItems={displayedItems} loading={loading} className={className} desc={desc} />
  );
};

export default ProductData;
