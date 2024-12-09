import React from "react";

import Link from "next/link";
import NewProductsCardItem from "./new-products-card-item";
import ProductItem from "../product/product-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import useWindowSize from "@/utils/useWindowSize";

interface NewProductsCardProps {
  newProducts: ProductItem[] | undefined;
  isProductsLoading: boolean;
}

const NewProductsCard: React.FC<NewProductsCardProps> = ({
  newProducts,
  isProductsLoading,
}) => {
  const windowSize = useWindowSize();
  const wWidth = windowSize.width ?? 0;

  return (
    <div className="flex flex-col justify-center w-full max-w-[292px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 1xl:max-w-1xl 2xl:max-w-2xl overflow-hidden">
      <Swiper
        spaceBetween={16}
        slidesPerView={wWidth < 768 ? "auto" : 3}
        onSlideChange={() => console.log("slide change")}
        freeMode={true}
        modules={[FreeMode]}
        className="flex justify-center items-center  w-full"
      >
        {!isProductsLoading
          ? newProducts?.map((product, _) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <SwiperSlide className="!w-[17rem] md:!w-[20rem] lg:w-full">
                  <NewProductsCardItem Product={product} />
                </SwiperSlide>
              </Link>
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide
                className="!w-[17rem] md:!w-[20rem] lg:w-full"
                key={index}
              >
                <div
                  className={` flex justify-center items-end w-full h-full  relative`}
                >
                  <div
                    className={`flex flex-col gap-2 justify-center items-end w-full h-full`}
                  >
                    <div
                      className={`relative flex justify-center items-center min-h-[18rem] max-h-[18rem] md:min-h-[24rem] md:max-h-[24rem] w-full h-full bg-gray-100 `}
                    >
                      <div className="h-0.5 w-[8rem] overflow-hidden rounded-sm bg-gray-200 ">
                        <motion.div
                          className="bg-black h-0.5 w-[5rem] rounded-sm"
                          animate={{ x: [-60, 110, -60] }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start relative z-10 w-full animate-pulse">
                      <div className="h-3 w-[45%] bg-gray-100  rounded"></div>
                      <div className="h-3 w-1/3 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default NewProductsCard;
