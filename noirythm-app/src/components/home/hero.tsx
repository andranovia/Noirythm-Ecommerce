import React from "react";
import Carousel from "./carousel";

const slider = [
  {
    url: "/img/slider/hero-img-1.png",
  },
  {
    url: "/img/slider/hero-img-2.png",
  },
  {
    url: "/img/slider/hero-img-3.png",
  },
  {
    url: "/img/slider/hero-img-4.png",
  },
];

function Hero() {
  return (
    <div className="flex justify-center  w-full">
      <Carousel slides={slider} />
    </div>
  );
}

export default Hero;
