"use client";

import { useProductRating } from "@/hooks/useProductRating";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaStar } from "react-icons/fa";
import ButtonSecondary from "../button/button-secondary";
import ButtonPrimary from "../button/button-primary";

interface ProductInfoReviewInputProps {
  rateColor: string | null;
  setCommentModal: Dispatch<SetStateAction<boolean>>;
  id: string;
}

const ProductInfoReviewInput = ({
  rateColor,
  id,
  setCommentModal,
}: ProductInfoReviewInputProps) => {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const { addReviewMutation } = useProductRating({
    id: id,
    addData: {
      reviewRating: reviewRating,
      reviewText: reviewText,
    },
  });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-sm font-semibold">Tell us your mind!</h2>
        <div className="flex justify-start gap-2 mb-10">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <div key={index} className="mr-2">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    className="relative left-6 opacity-0 sm:top-6 sm:left-1"
                    value={currentRating}
                    onClick={() => setReviewRating(currentRating)}
                  />
                  <FaStar
                    size={20}
                    color={
                      currentRating <=
                      (typeof rateColor === "number" ? rateColor : reviewRating)
                        ? "yellow"
                        : "grey"
                    }
                  />
                </label>
              </div>
            );
          })}
        </div>

        <div className="text-sm font-normal text-gray-700">
          <input
            className="border-b-gray-700 border-2 focus:outline-none w-full h-20 rounded-sm mb-10 p-3"
            placeholder="This product is cool.."
            type="text"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          {/* {errorMessage && (
              <p className="text-red-500 font-semibold relative bottom-8">
                {errorMessage}
              </p>
            )} */}
        </div>
        <div className="flex justify-center">
          <ButtonSecondary onClick={() => setCommentModal(false)}>
            Close
          </ButtonSecondary>
          <ButtonPrimary onClick={() => addReviewMutation()}>
            Send
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoReviewInput;
