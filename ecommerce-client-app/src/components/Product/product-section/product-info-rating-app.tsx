import ButtonPrimary from '@/components/button/button-primary-app';
import ButtonSecondary from '@/components/button/button-secondary-app';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductInfoRatingInput from './product-info-rating-input-app';
import ProductInfoRatingCommentModal from './product-info-rating-commentmodal-app';
import axiosInstance from '@/utils/api';

export default function ProductInfoRating({ id }: any) {
  const [rateColor] = useState(null);
  const [rating, setRating] = useState(0);
  const [commentModal, setCommentModal] = useState(false);
  const [reviewText, setReviewText] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/api/products/reviews/UserComment/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setRating(response.data.rating);
          if (Array.isArray(response.data.reviewText)) {
            setReviewText(response.data.reviewText);
          } else {
            setReviewText([response.data.reviewText]);
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching average rating and reviewText', error);
      });
  }, [id]);

  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };

  const roundedRating = Math.round(rating);

  return (
    <>
      <div className="mb-[18rem]">
        <div className="flex justify-start gap-2 mt-4">
          {[...Array(roundedRating)].map((star, index) => (
            <FaStar key={index} size={20} color="yellow" />
          ))}
        </div>
        <div className="my-6">
          <p className="w-fit text-sm font-bold ">
            average rating is {roundedRating} star
          </p>
        </div>
        <div className="bg-gray-300 w-[17rem] h-2 relative ">
          {reviewText.length > 0 ? (
            <>
              <div className="relative top-10 sm:top-6 sm:grid sm:gap-20 grid-cols-2  ">
                {reviewText.slice(0, 2).map((review, index) => (
                  <div className="p-4 sm:p-2 rounded-md shadow-ShadowCard mt-6 sm:mt-0 w-[15rem] sm:w-40 ">
                    <p key={index}>{review}</p>
                  </div>
                ))}
              </div>
              <div className="mt-[4rem]">
                <ButtonSecondary onClick={() => setShowMore(true)}>
                  Show more
                </ButtonSecondary>
              </div>
            </>
          ) : (
            <div className="w-[17rem] p-4 rounded-md shadow-ShadowCard mt-10">
              <h1 className="">there is curently no comments</h1>
            </div>
          )}
        </div>
        <div>
        <div
          className={
            reviewText.length > 0
              ? `relative top-[16rem] sm:top-24 sm:left-40`
              : `relative top-20 mb-[8rem] `
          }
        >
          <ButtonPrimary onClick={() => handleModalToggle(true)}>
            Give your opinions
          </ButtonPrimary>
        </div>

        {commentModal && (
          <>
            <ProductInfoRatingInput rateColor={rateColor} id={id}>
              <ButtonSecondary onClick={() => handleModalToggle(false)}>
                Close
              </ButtonSecondary>
              <ButtonPrimary type={'submit'}>Send</ButtonPrimary>
            </ProductInfoRatingInput>
          </>
        )}

        {showMore && (
          <>
            <ProductInfoRatingCommentModal
              reviewText={reviewText}
              setShowMore={setShowMore}
            />
          </>
        )}
        </div>
      </div>
    </>
  );
}
