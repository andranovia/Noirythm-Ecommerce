"use client";

import React, { MutableRefObject } from "react";
import { RxDotFilled } from "react-icons/rx";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useResize } from "@/utils/useResize";
import { cn } from "@/utils/cn";

interface Slide {
  url: string;
}

interface CarouselSlidesAppProps {
  slides: Slide[];
}

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const Carousel: React.FC<CarouselSlidesAppProps> = ({ slides }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const { isMobile } = useResize();

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: isMobile ? 2 : 4,
        spacing: 4,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="relative w-full flex justify-center ">
      <div className="-mt-0 h-full lg:mt-0 w-full flex justify-center gap-2 1xl:gap-4 p-2 1xl:p-0 flex-col relative lg:h-full overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, slideIndex) => (
            <div
              className="keen-slider__slide h-[11rem] xs:h-[13rem] sm:h-[15rem] md:h-[20rem] lg:h-[28rem] xl:h-[36rem] xl:min-h-[36rem] xl:max-h-[36rem] 1xl:h-[52rem] 1xl:min-h-[52rem]  1xl:max-h-[52rem] "
              key={slideIndex}
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "cover",
              }}
            ></div>
          ))}
        </div>

        <div ref={thumbnailRef} className="keen-slider xl:!grid grid-cols-4 ">
          {slides.map((slide, slideIndex) => (
            <div
              className={cn(`keen-slider__slide`)}
              key={slideIndex}
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "cover",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
