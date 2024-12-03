"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsHighlight } from "@/service/methods/getProducts";
import { motion } from "framer-motion";
import ProductItem from "../product/product-item";
import useWindowSize from "@/utils/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

const HighlightProduct = () => {
  const { data: productHighlight } = useQuery<ProductItem[]>({
    queryKey: ["productHighlight"],
    queryFn: () => getProductsHighlight(),
  });

  const windowSize = useWindowSize();
  const wWidth = windowSize.width ?? 0;

  useEffect(() => {
    setCards(productHighlight || []);
    setActiveId(productHighlight?.[0]?.id || "");
  }, [productHighlight]);

  const [cards, setCards] = React.useState(productHighlight || []);

  const [activeId, setActiveId] = React.useState(cards[0]?.id || "");

  const handleFocusedHighlight = (id: string) => {
    setCards((prevCards) => {
      const index = prevCards.findIndex((card) => card.id === id);
      if (index === -1) {
        return prevCards;
      }
      const newCards = [...prevCards];
      const cardAtIndex = newCards.splice(index, 1)[0];
      newCards.unshift(cardAtIndex);
      return newCards;
    });
  };

  const cardMotionStyles = (index: number) => ({
    rotate: index === 0 ? 2 : index === 1 ? 1 : -8,
    scale: 1 - index * 0.06,
    y: index === 0 ? 0 : 10,
    x: index === 0 ? [8, 350, 8] : 0,
    zIndex: cards.length - index,
  });

  const cardTransitionSettings = {
    duration: 1.15,
    ease: "easeInOut",
    zIndex: { delay: 0.6 },
  };

  const highlightData = [
    {
      id: "1a608cae-29d0-40b3-9af3-5e66bf4d9c7c",
      className: "absolute top-[48%] left-[40%]",
    },
    {
      id: "5d7e6761-76ea-47c5-a447-c1956e3048bd",
      className: "absolute top-2/3 left-[58%]",
    },
    {
      id: "40fa81ba-9a7c-490a-99be-aa719b16231f",
      className: "absolute top-[30%] left-[40%]",
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.realIndex;
    const activeItem = cards[activeIndex];
    setActiveId(activeItem?.id);
  };

  return (
    <div className="w-full h-full flex justify-center items-center py-8 sm:py-12 2xl:py-16 bg-white overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-start gap-4 xl:gap-28 w-full items-center max-w-[292px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 1xl:max-w-1xl 2xl:max-w-2xl relative">
        <div className="w-full h-[26rem] xs:h-[28rem] sm:h-[32rem] md:h-[45rem] xl:w-[40rem] 1xl:h-[60rem] rounded-md overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={420}
            height={420}
            className="w-full h-full object-cover"
          />
          {productHighlight?.map((item, index) => {
            return (
              <>
                <div key={index} className={highlightData[index].className}>
                  <div
                    id="tooltip-default"
                    role="tooltip"
                    className={`absolute z-10 w-[6rem] xs:w-[8rem] md:w-[10rem] inline-block px-3 py-2   transition-opacity duration-300 ${
                      activeId === highlightData[index].id
                        ? "opacity-100"
                        : "opacity-0"
                    }  bg-white rounded-lg shadow-sm tooltip -top-20 `}
                  >
                    <p className="text-xs font-light opacity-80 min-h-8 line-clamp-2 ">
                      {item.product_name}
                    </p>
                    <span className="text-xs font-light">
                      $ {item.product_price}
                    </span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setActiveId(highlightData[index].id);
                      handleFocusedHighlight(highlightData[index].id);
                    }}
                    data-tooltip-target="tooltip-default"
                    className="w-8 h-8 bg-white bg-opacity-50 rounded-full flex justify-center items-center"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        scale: activeId === highlightData[index].id ? 1 : 0.5,
                      }}
                      className="w-6 h-6 bg-white opacity-100 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {wWidth < 1024 ? (
          <div className="relative flex justify-center w-full h-[10rem] md:h-[10rem]">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              onSlideChange={handleSlideChange}
              className="flex justify-center items-center w-full h-full"
            >
              {cards?.map((item, _) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`w-full h-full flex items-center gap-4 md:gap-6 md:pr-4 `}
                    >
                      <Image
                        src={item.product_image}
                        alt=""
                        width={420}
                        height={420}
                        className="w-28 min-w-28 xs:w-[134px] sm:w-36 md:w-3/4 xs:min-w-[134px]  sm:min-w-36 h-full object-cover "
                      />
                      <div className="flex flex-col w-full justify-between h-full md:w-1/4 py-2">
                        <div className="flex flex-col w-full gap-2 ">
                          <span className="font-light w-3/4 line-clamp-2">
                            {item.product_name}
                          </span>
                          <span className="text-2xl">
                            ${item.product_price}
                          </span>
                        </div>

                        <div className="w-full flex justify-center items-center p-2 bg-black text-white">
                          See More
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className="w-[24rem] h-[60rem] relative ">
            <div className="w-full h-full 2xl:ml-8">
              {cards?.map((item, index) => {
                return (
                  <motion.div
                    key={item.id}
                    className={`w-[16rem] h-[20rem] 1xl:w-[20rem] 1xl:h-[24rem] top-[14rem] 1xl:top-[20rem] rounded-md overflow-hidden 
                    absolute`}
                    initial={false}
                    style={{ transformOrigin: "top center" }}
                    animate={cardMotionStyles(index)}
                    transition={cardTransitionSettings}
                  >
                    <Image
                      src={item.product_image}
                      alt=""
                      width={420}
                      height={420}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
              {productHighlight ? (
                <div className="flex flex-col w-full 2xl:px-4 absolute h-full gap-1 xl:top-[66%] 1xl:top-[82%] 2xl:left-4 ">
                  <p className="text-xs  text-[#2e2e2e]">
                    {productHighlight
                      .find((card) => card.id === activeId)
                      ?.id?.slice(0, 8)}
                  </p>
                  <h2 className="text-base font-thin text-[#2e2e2e]">
                    {
                      productHighlight.find((card) => card.id === activeId)
                        ?.product_name
                    }
                  </h2>
                  <p className="text-base font-medium text-[#2e2e2e]">
                    ${" "}
                    {
                      productHighlight.find((card) => card.id === activeId)
                        ?.product_price
                    }
                  </p>
                </div>
              ) : (
                <div className="flex flex-col w-full px-4 absolute h-full gap-1  xl:top-[66%] 1xl:top-[82%] left-4 animate-pulse">
                  <div className="h-3 w-1/3 bg-gray-100 rounded"></div>
                  <div className="h-5 w-4/5 bg-gray-100 rounded"></div>
                  <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
                </div>
              )}

              <div className="w-full h-full flex gap-2 relative xl:top-[62%] 1xl:top-[78%]">
                {productHighlight?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <motion.div
                        onClick={() => {
                          setActiveId(item.id);
                          handleFocusedHighlight(item.id);
                        }}
                        initial={{
                          width: activeId === item.id ? 64 : 48,
                          opacity: activeId === item.id ? 1 : 0.5,
                        }}
                        animate={{
                          width: activeId === item.id ? 64 : 48,
                          opacity: activeId === item.id ? 1 : 0.5,
                        }}
                        className="bg-[#2e2e2e] w-8 h-1 rounded-md"
                      ></motion.div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighlightProduct;
