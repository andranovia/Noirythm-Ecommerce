import React from "react";
import CategoryCard from "./category-card";

export default function Category() {
  const categories = [
    {
      id: "cloth",
      image: "/img/category/background/clothes.jpg",
      title: "Cloths",
      icon: "https://img.icons8.com/ios/50/FFFFFF/clothes.png",
    },
    {
      id: "trouser",
      image: "/img/category/background/trousers.jpg",
      title: "Trousers",
      icon: "https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/FFFFFF/external-clothes-clothes-accessories-outline-bartama-outline-64-bartama-graphic-2.png",
    },
    {
      id: "shoe",
      image: "/img/category/background/shoes.jpg",
      title: "Shoes",
      icon: "https://img.icons8.com/ios/50/FFFFFF/sneakers.png",
    },
    {
      id: "accessories",
      image: "/img/category/background/accessories.jpg",
      title: "accessories",
      icon: "https://img.icons8.com/ios-glyphs/30/FFFFFF/bracelet.png",
    },
  ];
  return (
    <div className=" h-fit sm:flex sm:justify-center sm:flex-col py-16 bg-white w-full mx-auto overflow-hidden ">
      <div className="flex justify-center flex-col items-center rounded-b-md w-full gap-16 bg-white ">
        <h1 className="text-2xl font-light uppercase text-gray-700 sm:text-4xl">
          Shop On Category
        </h1>
        <div className="flex w-full items-center  justify-center ">
          <CategoryCard categories={categories} />
        </div>
      </div>
    </div>
  );
}
