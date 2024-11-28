import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ProductItem from "../product/product-item";

const HighlightCardItem = ({
  cardData,
  index,
  cardsData,
}: {
  cardsData: ProductItem[];
  index: number;
  cardData: {
    id: string;
    image: string;
    title: string;
    price: number;
  };
}) => {
  const offset = 10;
  const scaleFactor = 0.06;

  const cardMotionStyles = (index: number) => ({
    top: index * -offset,
    scale: 1 - index * scaleFactor,
    y: index === 0 ? [0, 500, 0] : 0,
    zIndex: cardsData.length - index,
  });

  const cardTransitionSettings = {
    duration: 1.15,
    ease: "easeInOut",
    zIndex: { delay: 0.6 },
  };

  return (
    <motion.div
      key={cardData.id}
      className={`w-[20rem] h-[24rem] top-[20rem] rounded-md overflow-hidden absolute`}
      initial={false}
      style={{ transformOrigin: "top center" }}
      animate={cardMotionStyles(index)}
      transition={cardTransitionSettings}
    >
      <Image
        src={cardData.image}
        alt=""
        width={420}
        height={420}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default HighlightCardItem;
