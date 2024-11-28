"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useProduct } from "@/service/hooks/useProduct";
import ProductCard from "./product-card";
import Link from "next/link";
import { defaultTransition } from "@/utils/transitionMotion";
import { BsArrowDownRightCircle } from "react-icons/bs";

interface ProductProps {
  maxItems?: number;
  className: string | {} | null;
  productType?: string | null;
  desc: boolean;
  slider: boolean;
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
  slider,
  productType,
  desc,
  productTypeFilter,
}) => {
  const sectionRef = React.useRef(null);
  const inViewport = useInView(sectionRef);
  const { productsPromo, products, isLoading } = useProduct();
  const [hover, setHover] = React.useState(false);

  const selectedProduct =
    productTypeFilter === "promo" ? productsPromo : products;

  const filteredItems =
    productTypeFilter &&
    productTypeFilter !== "all" &&
    productTypeFilter !== "promo"
      ? selectedProduct?.filter(
          (item: ProductItem) => item?.product_type === productTypeFilter
        )
      : selectedProduct;

  const displayedItems = maxItems
    ? filteredItems?.slice(0, maxItems)
    : filteredItems;

  return (
    <div className="w-full overflow-auto">
      <div ref={sectionRef} className="bg-white relative ">
        <div className=" py-4 flex flex-col gap-10 ">
          {productType !== "Promo" ? (
            <div className="relative flex  gap-6  justify-between items-end  mx-10">
              <h1 className="text-2xl font-bold text-gray-600  z-20 ">
                {productType}s Shopping
              </h1>

              <Link
                href={"/category/" + productType}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="flex justify-center gap-3 items-center cursor-pointer"
              >
                <motion.div
                  initial={false}
                  transition={defaultTransition}
                  animate={{
                    x: hover ? -10 : 0,
                    opacity: hover ? 1 : 0.8,
                  }}
                  className="flex justify-center gap-3  items-center"
                >
                  <span className="line-clamp-1 !text-sm md:!text-base !font-semibold text-blue">
                    Seek more
                  </span>
                </motion.div>
                <div
                  className={`hidden md:flex justify-center items-center p-1 rounded-full overflow-hidden transition-transform ${
                    hover ? "-rotate-45 scale-125" : "rotate-0 scale-100"
                  }`}
                >
                  <BsArrowDownRightCircle />
                </div>
              </Link>
            </div>
          ) : null}

          <ProductCard
            slider={slider}
            isLoading={isLoading}
            ProductItems={displayedItems}
            className={className}
            desc={desc}
            inView={inViewport}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductData;
