"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import useWindowSize from "@/utils/useWindowSize";
import { defaultTransition } from "@/utils/transitionMotion";

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  promo_text?: string;
  id: string;
  average_rating: number;
}

interface ProductItemCardProps {
  item: ProductItem;
  className: string | {} | null;
  desc: boolean;
}

const ProductItem: React.FC<ProductItemCardProps> = ({
  item,
  className,
  desc,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const windowSize = useWindowSize();
  const wWidth = windowSize.width ?? 0;
  const roundedRating = Math.round(item.average_rating);

  return (
    <>
      <>
        <motion.div
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          <div
            className={
              desc
                ? `rounded-lg flex  flex-col  items-center !w-[16rem] !h-[23rem] border border-[#e2e2e2] xl:border-none  xl:!w-[24rem] xl:!h-[24rem] overflow-hidden`
                : `shadow-none mb-0 `
            }
          >
            <motion.div
              className={
                className
                  ? `flex-shrink-0 ${className} `
                  : `!w-[20rem] !h-[16rem] min-h-[16rem] xl:!w-[24rem] xl:!h-[24rem] xl:absolute overflow-hidden`
              }
              animate={
                desc && isHovering
                  ? { opacity: 0.6, scale: 0.95 }
                  : { opacity: 1, scale: 1 }
              }
            >
              <Image
                src={item.product_image}
                alt={item.product_name}
                width={260}
                height={260}
                className={"w-full h-full object-cover flex rounded-lg"}
              />
            </motion.div>

            <motion.div
              animate={isHovering || wWidth < 1024 ? { y: 0 } : { y: 100 }}
              transition={defaultTransition}
              className={
                desc
                  ? ` z-20 flex flex-col xl:justify-center pt-3  w-full px-4 xl:px-8 xl:py-4  bg-white h-24 relative xl:top-[calc(100%-6rem)] gap-2 xl:gap-0`
                  : `hidden`
              }
            >
              <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center gap-2 xl:gap-0 ">
                <h4 className="text-lg font-light text-black line-clamp-1 ">
                  {item.product_name}
                </h4>
                <div className="flex items-center gap-1">
                  <div className="flex xl:justify-center gap-1 xl:gap-2">
                    {isValidArrayLength(roundedRating) && (
                      <>
                        {[...Array(roundedRating)].map((_, index) => (
                          <FaStar key={index} size={15} color="yellow" />
                        ))}
                        {[...Array(5 - roundedRating)].map((_, index) => (
                          <FaStar
                            key={index + roundedRating}
                            size={wWidth < 1024 ? 10 : 15}
                            color="grey"
                          />
                        ))}
                      </>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    ({item.average_rating ? item.average_rating : 0})
                  </span>
                </div>
              </div>
              <p className="text-base font-medium text-black">
                $ {item.product_price}
              </p>

              {/* <div
                className={
                  item.promo_text
                    ? `bg-gray-800 ml-20 rounded-lg flex h-7 w-[6rem] my-2 p-2 flex-col justify-center`
                    : ``
                }
              >
                <h2 className="font-semibold text-white">{item.promo_text}</h2>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </>
    </>
  );
};
function isValidArrayLength(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}

export default ProductItem;
