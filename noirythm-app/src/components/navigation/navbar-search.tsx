import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useProduct } from "@/service/hooks/useProduct";
import { motion } from "framer-motion";
import { defaultTransition } from "@/utils/transitionMotion";
import ProductItem from "../product/product-item";

const NavbarResult = dynamic(() => import("./navbar-result"));

const NavbarSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { productsSearch, isSearchResultsVisible } = useProduct(searchQuery);
  const [showResults, setShowResults] = useState(false);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isSearchResultsVisible) {
      timeout = setTimeout(() => setShowResults(true), 800);
    } else {
      setShowResults(false);
    }
    return () => clearTimeout(timeout);
  }, [isSearchResultsVisible]);

  const handleOpenSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
    setSearchQuery("");
  };

  return (
    <>
      <div ref={inputRef} className="flex justify-center  relative h-[2.5rem]">
        <div
          onClick={() => handleOpenSearchBar()}
          className="absolute  z-50 inset-y-0 left-3 flex w-[40px]"
        >
          <div />
          {!openSearchBar ? (
            <Image
              src="https://img.icons8.com/windows/32/search.png"
              width={40}
              height={40}
              alt=""
              className={`${
                openSearchBar ? "opacity-0" : "opacity-100"
              } transition-opacity w-[18px] h-[18px]  relative z-20 top-3`}
            />
          ) : (
            <motion.svg
              viewBox="0 0 62 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[3rem] -top-[0.5rem] -left-[1rem] relative z-20"
            >
              <motion.path
                d="M56.5688 57.3139L33.9414 34.6865"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: openSearchBar ? 1 : 0 }}
                transition={defaultTransition}
              />
              <motion.path
                d="M52.7969 38.4575L56.5681 34.6863"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: openSearchBar ? 1 : 0 }}
                transition={{ ...defaultTransition, delay: 0.2 }}
              />
              <motion.path
                d="M33.9414 57.3135L44.614 46.6409"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: openSearchBar ? 1 : 0 }}
                transition={{ ...defaultTransition, delay: 0.4 }}
              />
              <motion.path
                d="M56.5688 57.3139L33.9414 34.6865"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: openSearchBar ? 1 : 0 }}
                transition={{ ...defaultTransition, delay: 0.6 }}
              />
            </motion.svg>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: openSearchBar ? 1 : 0,
            width: openSearchBar ? "54rem" : "10rem",
          }}
          transition={defaultTransition}
          className="flex justify-center z-40  left-0 absolute h-[2.5rem]"
        >
          <input
            type="text"
            className="relative border-none bg-gray-100 p-2 w-full h-full pl-12 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isSearchResultsVisible ? "85vh" : "0" }}
        className="fixed bg-white w-full   flex justify-center items-center  left-0 lg:top-16 right-0"
      >
        <div className="w-full  max-w-2xl grid grid-cols-2 max-h-[60vh] overflow-y-scroll">
          {showResults &&
            (productsSearch as ProductItem[])
              ?.slice(0, 8)
              .map((result: ProductItem) => (
                <Link
                  href={{
                    pathname: `/product/${result.id}`,
                  }}
                  key={result.id}
                >
                  <NavbarResult key={result.id} result={result} />
                </Link>
              ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavbarSearch;
