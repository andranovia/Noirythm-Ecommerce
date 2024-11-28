import React from "react";
import Link from "next/link";
import ProductLoading from "./product-loading";
import ProductItem from "./product-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

interface ProductItemData {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: string;
  promo_text: string;
  average_rating: number;
}

interface ProductCardProps {
  ProductItems: ProductItemData[];
  className: string | {} | null;
  slider: boolean;
  desc: boolean;
  isLoading: boolean;
  inView: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  ProductItems,
  className,
  desc,
  slider,
  isLoading,
  inView,
}) => {
  return (
    <div className="flex justify-center h-full ">
      <div
        className={` ${
          slider ? "flex justify-center " : "grid lg:grid-cols-4 "
        }  md:gap-4  gap-8 grid-cols-2 overflow-hidden`}
      >
        {desc && isLoading ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <React.Fragment key={index}>
                <ProductLoading />
              </React.Fragment>
            ))}
          </>
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, FreeMode]}
            className="flex justify-center items-center  w-full min-h-[24rem]"
          >
            {ProductItems?.map((item, _) => (
              <Link
                href={{
                  pathname: `/product/${item.id}`,
                }}
                key={item.id}
              >
                <SwiperSlide>
                  <ProductItem item={item} className={className} desc={desc} />
                </SwiperSlide>
              </Link>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
