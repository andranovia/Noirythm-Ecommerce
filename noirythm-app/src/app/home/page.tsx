"use client";

import React from "react";
import Category from "@/components/home/category";
import Hero from "@/components/home/hero";
import Product from "@/components/product/product";
import { useProduct } from "@/hooks/useProduct";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <Hero />
      <Category />
      <Product />
    </main>
  );
};

export default Home;
