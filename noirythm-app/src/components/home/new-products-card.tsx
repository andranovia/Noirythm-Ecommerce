import React from "react";

import Link from "next/link";
import NewProductsCardItem from "./new-products-card-item";
import ProductItem from "../product/product-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { useResize } from "@/utils/useResize";

interface NewProductsCardProps {
  newProducts: ProductItem[] | undefined;
}

const NewProductsCard: React.FC<NewProductsCardProps> = ({ newProducts }) => {
  const { isMobile } = useResize();

  return (
    <div className="flex flex-col justify-center w-full max-w-[292px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 1xl:max-w-1xl 2xl:max-w-2xl overflow-hidden">
      <Swiper
        spaceBetween={16}
        slidesPerView={isMobile ? "auto" : 3}
        onSlideChange={() => console.log("slide change")}
        freeMode={true}
        modules={[FreeMode]}
        className="flex justify-center items-center  w-full"
      >
        {newProducts?.map((product, _) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <SwiperSlide className="!w-[17rem] md:!w-[20rem] lg:w-full">
              <NewProductsCardItem Product={product} />
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProductsCard;
