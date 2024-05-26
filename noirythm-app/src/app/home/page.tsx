
import React from "react";
import Category from "@/components/home/category";
import Hero from "@/components/home/hero";
import Product from "@/components/product/product";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gray-100 md:gap-10   pt-10">
      <Hero />
      <Category />
      <Product />
    </div>
  );
};

export default Home;
