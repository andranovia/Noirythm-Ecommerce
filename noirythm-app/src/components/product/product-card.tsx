import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ProductLoading from "./product-loading";

const ProductItem = dynamic(() => import("@/components/product/product-item"));

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
  className: string | {} | null;
  desc: boolean;
  isLoading: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  ProductItems,
  className,
  desc,
  isLoading,
}) => {
  return (
    <div className="flex justify-center">
      <div className="grid auto-rows-fr gap-[3vh]  grid-cols-2 gap-y-14 md:grid-cols-4  lg:grid-cols-4 ">
        {desc && isLoading ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <React.Fragment key={index}>
                <ProductLoading />
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            {ProductItems?.map((item, index) => (
              <Link
                href={{
                  pathname: `/product/${item.id}`,
                }}
                key={index}
              >
                <ProductItem item={item} className={className} desc={desc} />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
