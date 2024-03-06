import React from 'react';
import { useProductContext } from '../../contexts/productContext';
import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import('@/components/product/ProductCard'));

interface ClothProductProps {
  maxItems?: number;
  className: string | {} | null;
  desc: boolean;
  productTypeFilter?: string;
}

const ProductData: React.FC<ClothProductProps> = ({
  maxItems,
  className,
  desc,
  productTypeFilter,
}) => {
  const { productItems } = useProductContext();

  const filteredItems = productTypeFilter
    ? productItems.filter((item) => item.product_type === productTypeFilter)
    : productItems;

  const displayedItems =
    maxItems === Infinity ? filteredItems : filteredItems.slice(0, maxItems);

  return (
    <ProductCard
      ProductItems={displayedItems}
      className={className}
      desc={desc}
    />
  );
};

export default ProductData;
