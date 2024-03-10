"use client";

import ButtonPrimary from "../button/button-primary";
import ButtonSecondary from "../button/button-secondary";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ProductInfoReviewInput from "./product-info-review-input";
import ProductReviewCard from "./product-review-card";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

interface ProductInfoReviewProps {
  productReviews: {
    ratings: number;
    review_texts: string;
    comment_id: number;
    product_Id: string;
    user_id: number;
  }[];
  averageRating: number;
  productId: string;
}

export default function ProductInfoReviews({
  productReviews,
  averageRating,
  productId,
}: ProductInfoReviewProps) {
  const [rateColor] = useState(null);
  const [commentModal, setCommentModal] = useState(false);
  const { user } = useAuth();

  const hasCurrentUserReview = productReviews?.some(
    (review) => review.user_id === user?.id
  );
  const averageRoundedRating = Math.round(averageRating);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < averageRoundedRating; i++) {
      stars.push(<FaStar key={i} size={20} color="yellow" />);
    }
    return stars;
  };

  const renderRating = () =>
    productReviews?.slice(0, 2).map((review, index) => (
      <React.Fragment key={index}>
        <ProductReviewCard
          review={review}
          hasCurrentUserReview={hasCurrentUserReview}
        />
      </React.Fragment>
    ));

  const reviewContent = hasCurrentUserReview ? (
    <>
      <div className="flex justify-start gap-2 mt-4">{renderStars()}</div>
      <div className="my-6">
        <p className="w-fit text-sm font-bold ">
          average rating is {averageRoundedRating} star
        </p>
      </div>

      <div className="bg-gray-300 w-[17rem] h-2 relative mt-4 mb-[4rem]">
        <div className="relative top-10 sm:top-6 sm:grid sm:gap-40 grid-cols-2">
          {renderRating()}
        </div>
        <div className="sm:mt-[3rem] mt-[4rem]">
          <ButtonSecondary>Show others</ButtonSecondary>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="w-[17rem] p-4 rounded-md shadow-ShadowCard mt-10">
        <h1 className="">there is currently no comment</h1>
      </div>

      {hasCurrentUserReview ? null : (
        <div className={"relative mt-10 z-2"}>
          {!user?.id ? (
            <div className={!user?.id ? `relative mt-10` : "hidden"}>
              <Link href={"/auth/login"}>
                <ButtonPrimary>Login</ButtonPrimary>
              </Link>
            </div>
          ) : (
            <ButtonPrimary onClick={() => setCommentModal(true)}>
              Give your opinions
            </ButtonPrimary>
          )}
        </div>
      )}
    </>
  );

  return (
    <>
      <div className={`h-auto`}>
        {reviewContent}
        <div className="relative z-20">
          {commentModal && (
            <>
              <ProductInfoReviewInput
                rateColor={rateColor}
                id={productId}
                setCommentModal={setCommentModal}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
