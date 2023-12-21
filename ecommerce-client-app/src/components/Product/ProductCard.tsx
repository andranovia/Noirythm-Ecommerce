import React from 'react';
import Link from 'next/link';
import ProductSkeletonLoading from './ProductSkeletonLoading';
import ProductItemCard from './ProductItemCard';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: string;
  promo_text: string;
}

interface ProductCardProps {
  ProductItems: ProductItem[];
  loading: boolean;
  className: string | {} | null;
  desc: boolean;
  
}

const ProductCard: React.FC<ProductCardProps> = ({
  ProductItems,
  loading,
  className,
  desc,
 
}) => {
  return (
    <div className="flex justify-center">
      <div className="grid auto-rows-fr gap-[3vh] grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
        {desc && loading ? (
          <>
            {ProductItems.map(() => (
              <ProductSkeletonLoading />
            ))}
          </>
        ) : (
          <>
            {ProductItems.map((item, index) => (
              <Link
                href={{
                  pathname: `/product/${item.id}`,
                  query: {
                    product_name: item.product_name,
                    product_price: item.product_price,
                    product_image: item.product_image,
                    product_description: item.product_description,
                  },
                }}
                key={item.id}
              >
                <ProductItemCard
                  key={index}
                  item={item}
                  className={className}
                  desc={desc}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
