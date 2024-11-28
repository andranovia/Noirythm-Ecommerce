"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsHighlight } from "@/service/methods/getProducts";
import { motion, useAnimation } from "framer-motion";
import ProductItem from "../product/product-item";

const HighlightProduct = () => {
  const { data: productHighlight } = useQuery<ProductItem[]>({
    queryKey: ["productHighlight"],
    queryFn: () => getProductsHighlight(),
  });

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

  return (
    <div className="w-full h-full flex justify-center items-center py-16 bg-white overflow-hidden">
      <div className="flex justify-start gap-28 w-full items-center max-w-2xl relative">
        <div className="w-[40rem] h-[60rem] rounded-md overflow-hidden relative">
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
                    className={`absolute z-10 w-[10rem] inline-block px-3 py-2   transition-opacity duration-300 ${
                      activeId === highlightData[index].id
                        ? "opacity-100"
                        : "opacity-0"
                    }  bg-white rounded-lg shadow-sm tooltip -top-20 `}
                  >
                    <p className="text-xs font-light opacity-80 min-h-8">
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
        <div className="w-[24rem] h-[60rem] relative ">
          <div className="w-full h-full ml-8">
            {cards?.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  className={`w-[20rem] h-[24rem] top-[20rem] rounded-md overflow-hidden 
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
              <div className="flex flex-col w-full px-4 absolute h-full gap-1  top-[82%] left-4 ">
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
              <div className="flex flex-col w-full px-4 absolute h-full gap-1  top-[82%] left-4 animate-pulse">
                <div className="h-3 w-1/3 bg-gray-100 rounded"></div>
                <div className="h-5 w-4/5 bg-gray-100 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
              </div>
            )}
            <div className="w-full h-full flex gap-2 relative top-[78%]">
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
      </div>
    </div>
  );
};

export default HighlightProduct;
