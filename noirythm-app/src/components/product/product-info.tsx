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
}

export default function ProductInfo({ product }: ProductInfoProps) {
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
            <Image
              src={product?.product_image}
              width={220}
              height={220}
              alt=""
              className="w-full rounded mt-6"
            />
          )}
          {!isMobile && (
            <div className="w-full md:w-1/2 fixed">
              <Image
                src={product?.product_image}
                width={420}
                height={420}
                alt=""
                className="relative w-full h-[50rem] object-cover z-1  md:mb-0"
              />
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
            <p className="text-2xl font-bold mt-4">{`$${product?.product_price}`}</p>
            <h1 className="text-3xl font-semibold">{product?.product_name}</h1>
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
