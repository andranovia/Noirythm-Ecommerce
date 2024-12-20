"use client";

import React, { useEffect, useState } from "react";
import Cart from "@/components/cart/cart";
import { useCart } from "@/service/hooks/useCart";
import Link from "next/link";
import ButtonPrimary from "@/components/button/button-primary";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/service/hooks/useAuth";
import useCheckout from "@/service/hooks/useCheckout";

export type CheckedProduct = {
  id: string;
  name: string;
};

const CartPage = () => {
  const [totalPrice, settotalPrice] = useState(0);
  const { userCart } = useCart();
  const [checkedProducts, setCheckedProducts] = useState<CheckedProduct[]>([]);
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  const { makeCheckout } = useCheckout({
    checkoutData: {
      purchased_products: checkedProducts,
      unit_amount: totalPrice,
      current_url: pathname,
    },
  });

  return (
    <>
      <div className="flex min-h-screen  relative top-10 w-full  bg-gray-100">
        <div className="md:ml-0 lg:ml-20 flex flex-col w-full justify-center h-full pt-16 lg:pt-24">
          <div className="grid px-6 lg:p-0 w-full">
            <h1 className="text-2xl font-bold lg:mb-10  ">Shopping Cart</h1>

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
              <div className="flex w-full lg:w-3/4">
                <div className="flex flex-col  w-full lg:w-2/3 ">
                  <div className="container h-full lg:w-[40rem] ">
                    <Cart
                      userCart={userCart?.cartProducts}
                      setTotalPrice={settotalPrice}
                      setCheckedProducts={setCheckedProducts}
                      checkedProduct={checkedProducts}
                    />
                  </div>
                  <div className="bg-white container lg:mt-0 my-10 lg:w-[40rem]  rounded-lg lg:border-0  border-2  border-gray-800  p-4">
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
                <div className="lg:relative fixed bottom-0 z-30 w-full left-0  lg:w-1/3 h-[12rem] lg:h-[14rem]  p-2">
                  <div className="flex flex-col w-full gap-4 h-full justify-between bg-white  rounded-lg p-6">
                    <div className="flex flex-col w-full gap-4 h-full">
                      <h1 className="font-semibold text-lg">
                        Shopping summary
                      </h1>
                      <h3>Total: {totalPrice ? totalPrice : "-"}</h3>
                    </div>

                    <ButtonPrimary
                      className="w-full "
                      onClick={() => makeCheckout()}
                    >
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
