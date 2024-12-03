"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import useWindowSize from "@/utils/useWindowSize";

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
      {wWidth > 768 && (
        <>
          <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <div
              className={
                desc
                  ? `rounded-lg flex  flex-col lg:w-full md:mb-0 mb-14 h-full lg:items-stretch `
                  : `shadow-none mb-0 `
              }
            >
              <motion.div
                className={
                  className
                    ? `flex-shrink-0 ${className} `
                    : `h-[20vh] w-[20vh] md:w-full lg:w-full `
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
                  className={
                    desc
                      ? "w-full md:h-full lg:h-[50vh] object-cover flex rounded-lg "
                      : "w-[14rem] h-full object-cover rounded-lg"
                  }
                />
              </motion.div>

              <motion.div
                animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
                className={
                  desc
                    ? `text-center mt-4 p-3 opacity-0 z-20 md:hidden lg:block`
                    : `hidden`
                }
              >
                <h4 className="text-lg font-bold text-black ">
                  {item.product_name}
                </h4>
                <p className="text-base font-bold text-black">
                  {item.product_price}
                </p>
                <div
                  className={
                    item.promo_text
                      ? `bg-gray-800 ml-20 rounded-lg flex h-7 w-[6rem] my-2 p-2 flex-col justify-center`
                      : ``
                  }
                >
                  <h2 className="font-semibold text-white">
                    {item.promo_text}
                  </h2>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {isValidArrayLength(roundedRating) && (
                    <>
                      {[...Array(roundedRating)].map((_, index) => (
                        <FaStar key={index} size={15} color="yellow" />
                      ))}
                      {[...Array(5 - roundedRating)].map((_, index) => (
                        <FaStar
                          key={index + roundedRating}
                          size={15}
                          color="grey"
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
      {wWidth < 768 && (
        <>
          <div
            className={
              desc
                ? `rounded-lg flex flex-col lg:w-full mb-4 h-full items-stretch  bg-white shadow-md`
                : `shadow-none`
            }
          >
            <div
              className={
                className
                  ? `flex-shrink-0 ${className} `
                  : `h-[20vh] w-full lg:w-[40vh] lg:h-[40vh]`
              }
            >
              <Image
                src={item.product_image}
                alt={item.product_name}
                width={260}
                height={260}
                className="w-full h-full object-cover flex rounded-lg "
              />
            </div>

            <div className={desc ? `text-start mt-4 ml-3 p-3 ` : `hidden`}>
              <h4 className="text-lg font-light text-black">
                {item.product_name}
              </h4>
              <p className="text-base font-bold text-black">
                {item.product_price}
              </p>
              <div
                className={
                  item.promo_text
                    ? `bg-gray-800 rounded-lg flex h-7 w-[6rem] my-2 p-2 flex-col justify-center`
                    : ``
                }
              >
                <h2 className="font-semibold text-white">{item.promo_text}</h2>
              </div>
              <div className="flex justify-start gap-2 mt-4">
                {isValidArrayLength(roundedRating) && (
                  <>
                    {[...Array(roundedRating)].map((_, index) => (
                      <FaStar key={index} size={15} color="yellow" />
                    ))}
                    {[...Array(5 - roundedRating)].map((_, index) => (
                      <FaStar
                        key={index + roundedRating}
                        size={15}
                        color="grey"
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
function isValidArrayLength(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}

export default ProductItem;
