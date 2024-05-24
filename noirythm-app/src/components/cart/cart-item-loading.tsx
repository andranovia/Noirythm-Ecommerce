import React from "react";

const CartItemLoading = () => {
  return (
    <div className="rounded-lg flex p-4 px-6 lg:px-8 animate-pulse  gap-4 h-32 items-center  w-full bg-white ">
      <div className="w-5 h-5 bg-gray-300 rounded-sm "></div>
      <div className="w-24 h-24 bg-gray-300 rounded-lg ml-2 lg:ml-4"></div>

      <div className="relative  sm:flex  flex-col justify-center ">
        <div className="h-3 lg:h-4 bg-gray-400 rounded-full w-32  lg:w-40 mb-4"></div>
        <div className="h-2 bg-gray-300 rounded-full  w-full mb-4"></div>
        <div className="relative  sm:flex  flex-col ">
          <div className="h-6 lg:h-8 bg-gray-300 rounded-full w-20 lg:w-28 "></div>
        </div>
      </div>
    </div>
  );
};

export default CartItemLoading;
