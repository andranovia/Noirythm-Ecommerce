import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import ButtonSecondary from "../button/button-secondary";
import ButtonPrimary from "../button/button-primary";
import { useChanges } from "@/context/ChangesContext";
import ProductInfoReviews from "./product-info-review";
import { useResize } from "@/hooks/useResize";

interface ProductInfoProps {
  product: {
    id: string;
    product_name: string;
    product_image: string;
    product_price: number;
    product_description: string;
    product_reviews: {
      ratings: number;
      review_texts: string;
      comment_id: number;
      product_Id: string;
      user_id: number;
    }[];
    average_rating: number;
  };
  isLoading: boolean;
}

export default function ProductInfo({ product, isLoading }: ProductInfoProps) {
  const { addToCart } = useCart(product?.id);
  const { isChangesSaved } = useChanges();
  const { isMobile } = useResize();

  return (
    <>
      <div className="bg-white rounded-lg mb-20 md:my-0  ">
        <div
          className={`flex flex-col ${
            isMobile ? "items-center" : "items-start"
          } md:flex-row`}
        >
          {isMobile && (
            <>
              {isLoading ? (
                <div className="relative w-full  h-[20rem] rounded mt-6 bg-gray-700 shadow-sm  animate-pulse">
                  <div className="flex justify-center items-center flex-col w-full h-full bg-gray-300">
                    <svg
                      className="w-1/3 h-1/3 text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <Image
                  src={product?.product_image}
                  width={220}
                  height={220}
                  alt="product-image"
                  className="w-full rounded mt-6 h-[20rem] object-cover"
                />
              )}
            </>
          )}
          {!isMobile && (
            <div className="w-full md:w-1/2 fixed">
              {isLoading ? (
                <div className="relative w-full h-[50rem] object-cover z-1  md:mb-0  shadow-sm  animate-pulse">
                  <div className="flex justify-center items-center flex-col w-full h-full bg-gray-400">
                    <svg
                      className="w-1/3 h-1/3 text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <Image
                  src={product?.product_image}
                  width={420}
                  height={420}
                  alt="product-image"
                  className="relative w-full h-[50rem] object-cover z-1  md:mb-0"
                />
              )}

              {!isMobile && (
                <div className="flex justify-start z-2 items-center fixed bottom-10 left-40  bg-white rounded-md p-5 font-medium ">
                  <div className="flex justify-center items-center mr-5">
                    <BsChatLeftText className="w-7 h-7" />
                  </div>
                  <ButtonSecondary onClick={() => addToCart()}>
                    Add to <MdAddShoppingCart />
                  </ButtonSecondary>

                  <ButtonPrimary>Buy Now</ButtonPrimary>
                </div>
              )}
            </div>
          )}
          <div
            className={`w-full p-6 top-0 left-0 ${
              isMobile ? "mt-4 mb-[10rem]" : "md:w-1/2 lg:ml-[50%] md:my-10  "
            }`}
          >
            {isLoading ? (
              <div className="my-10 animate-pulse">
                <div className="h-8 bg-gray-400 rounded-full w-32 mb-4"></div>
                <div className="h-6 bg-gray-300 rounded-full w-44 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full w-56 mb-4"></div>

                <div className="mt-16 w-2/3 ">
                  <div className="h-14 bg-gray-200 rounded-md w-64 mb-4"></div>
                </div>

                <div className="mt-4">
                  <div className="h-6 bg-gray-400 rounded-md w-56 mb-4"></div>
                </div>
                <div className="mt-4">
                  <div className="h-6 bg-gray-300 rounded-md w-72 mb-4"></div>
                </div>
                <div className="mt-16">
                  <div className="h-20 bg-gray-300 rounded-md w-64 mb-4"></div>
                  <div className="flex items-center mt-10">
                    <svg
                      className="w-10 h-10 me-3 text-gray-400 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full  w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="text-2xl font-bold mt-4">{`$${product?.product_price}`}</p>
                <h1 className="text-3xl font-semibold">
                  {product?.product_name}
                </h1>
                <p className="text-gray-600">Product ID: {product?.id}</p>

                <div className="mt-4 w-2/3 ">
                  <label className="text-sm font-semibold">Select Size:</label>
                  <select className="block w-full mt-2 p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-400">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                <div className="mt-4">
                  <h2 className="font-medium text-2xl">Product description</h2>
                  <p className=" text-gray-600 text-1xl ">
                    {product?.product_description}
                  </p>
                </div>
                <div className="mt-10">
                  <div className="font-medium text-2xl ">
                    <h2 className="text-gray-800">
                      Give rating to {product?.product_name}!
                    </h2>
                  </div>
                  <div className="mr-28 lg:mb-32  sm:flex justify-start">
                    <ProductInfoReviews
                      productReviews={product?.product_reviews}
                      averageRating={product?.average_rating}
                      productId={product?.id}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          {isChangesSaved && (
            <>
              <div className="w-full fixed flex justify-center items-center">
                <div className=" bg-emerald-600 w-[16rem] h-14 rounded-md bottom-14 mb-10">
                  <div className="p-4 flex justify-center items-center">
                    <p className="text-md font-bold text-white">
                      Changes Saved
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {isMobile && (
            <div
              className="mt-6 flex justify-center items-center bg-white p-5 font-medium"
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 10,
              }}
            >
              <div className="flex justify-center items-center mr-5">
                <BsChatLeftText className="w-7 h-7" />
              </div>
              <ButtonSecondary
                onClick={() => {
                  addToCart();
                }}
              >
                Add to <MdAddShoppingCart />
              </ButtonSecondary>

              <ButtonPrimary>Buy Now</ButtonPrimary>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
