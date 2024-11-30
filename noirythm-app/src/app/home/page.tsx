import React from "react";
import Category from "@/components/home/category";
import Hero from "@/components/home/hero";
import Product from "@/components/product/product";
import HighlightProduct from "@/components/home/highlight-product";
import NewProducts from "@/components/home/new-products";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gray-100 gap-[3px]  pt-[4rem]">
      <Hero />
      <NewProducts />
      <HighlightProduct />
      {/* <Category />
      <Product /> */}
    </div>
  );
};

export default Home;
