"use client";

import React, { useState } from "react";
import ButtonPrimary from "../button/button-primary";
import ButtonSecondary from "../button/button-secondary";
import { FaStar } from "react-icons/fa";
import { useProductRating } from "@/service/hooks/useProductRating";

interface ProductInfoReviewEdit {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: number;
  rating: number;
  reviewText: string;
}

const ProductInfoReviewEdit = ({
  setIsEditing,
  reviewText,
  commentId,
  rating,
}: ProductInfoReviewEdit) => {
  const [editedReviewText, setEditedReviewText] = useState(reviewText);
  const [editedRating, setEditedRating] = useState(rating);

  const { updateReviewMutation } = useProductRating({
    editedData: {
      editedRating: editedRating,
      editedReviewText: editedReviewText,
    },
    reviewId: commentId,
  });

  return (
    <div className="fixed z-30 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-sm font-semibold">Change your mind? </h2>
        <div className="p-3 rounded-md mt-4 shadow-ShadowCard">
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
                      checked={editedRating === currentRating}
                      onChange={() => setEditedRating(currentRating)}
                    />
                    <FaStar
                      size={20}
                      color={currentRating <= editedRating ? "yellow" : "grey"}
                    />
                  </label>
                </div>
              );
            })}
          </div>
          <input
            type="text"
            value={editedReviewText}
            onChange={(e) => setEditedReviewText(e.target.value)}
          />
        </div>
        <div className="mt-10 flex justify-center z-20">
          <ButtonSecondary onClick={() => setIsEditing(false)}>
            Close
          </ButtonSecondary>
          <ButtonPrimary onClick={() => updateReviewMutation()}>
            Save
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoReviewEdit;
