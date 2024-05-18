"use client";

import React from "react";
import Cart from "@/components/cart/cart";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import ButtonPrimary from "@/components/button/button-primary";

const CartPage = () => {
  const { userCart } = useCart();

  return (
    <>
      <div className="flex min-h-screen  relative top-10 w-full  bg-gray-100">
        <div className="sm:ml-20 flex flex-col w-full justify-center h-full pt-16 lg:pt-24">
          <div className="grid px-6 lg:p-0 w-full">
            <h1 className="text-2xl font-bold lg:mb-10 px-4 lg:p-0 ">
              Shopping Cart
            </h1>

            {userCart?.cartProducts?.length === 0 ? (
              <div className="my-10 rounded-md mx-auto shadow-ShadowCard p-10 ">
                <div>
                  <p className="font-semibold text-2xl">
                    Your cart is empty! please add product to your shopping
                    cart.
                  </p>
                  <Link href={"/category/all"}>
                    <button className="bg-gray-800 rounded-lg flex h-15 w-fit h- my-8 p-2 flex-col justify-center">
                      <h2 className="font-semibold text-white">
                        Click here to see cool products
                      </h2>
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex w-3/4">
                <div className="flex flex-col  lg:w-2/3 ">
                  <div className="container h-2/3 ">
                    <Cart userCart={userCart?.cartProducts} />
                  </div>
                  <div className="bg-white container lg:my-0 my-10 lg:w-[40rem]  rounded-lg lg:border-0  border-2 lg:mx-0  border-gray-800 mx-4 p-4">
                    <p className="font-semibold text-lg ">
                      Seems like you find your taste, want to find something
                      else?
                    </p>
                    <Link href={"/category/all"}>
                      <button className="bg-gray-800 rounded-lg flex h-15 w-fit h- mt-6 p-2 flex-col justify-center">
                        <h2 className="font-semibold text-white">
                          Click here to see cool products
                        </h2>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="  lg:w-1/3 h-[14rem] bg-white  rounded-lg p-6">
                  <div className="flex flex-col w-full gap-4 h-full justify-between">
                    <div className="flex flex-col w-full gap-4 h-full">
                      <h1 className="font-semibold text-lg">
                        Shopping summary
                      </h1>
                      <h3>Total: -</h3>
                    </div>

                    <ButtonPrimary className="w-full ">
                      <span className="font-semibold text-md">Purchase</span>
                    </ButtonPrimary>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
