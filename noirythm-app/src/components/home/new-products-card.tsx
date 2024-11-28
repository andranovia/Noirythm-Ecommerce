import React from "react";

import Link from "next/link";
import NewProductsCardItem from "./new-products-card-item";
import ProductItem from "../product/product-item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface NewProductsCardProps {
  newProducts: ProductItem[] | undefined;
}

const NewProductsCard: React.FC<NewProductsCardProps> = ({ newProducts }) => {
  return (
    <div className="flex flex-col justify-center w-full max-w-2xl overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex justify-center items-center  w-full"
      >
        {newProducts?.map((product, _) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <SwiperSlide>
              <NewProductsCardItem Product={product} />
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProductsCard;
