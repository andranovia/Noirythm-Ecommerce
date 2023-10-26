import ButtonPrimary from '@/components/button/button-primary-app';
import ButtonSecondary from '@/components/button/button-secondary-app';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductInfoRatingInput from './product-info-rating-input-app';
import axiosInstance from '@/utils/api';

export default function ProductInfoRating({ id }: any) {
  const [rateColor] = useState(null);
  const [rating, setRating] = useState(0);
  const [commentModal, setCommentModal] = useState(false);
  const [reviewText, setReviewText] = useState<string | null>();

  useEffect(() => {
    axiosInstance
      .get(`/api/products/reviews/UserComment/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setRating(response.data.rating);
          setReviewText(response.data.reviewText);
        }
      })
      .catch((error) => {
        console.error('Error fetching average rating and reviewText', error);
      });
  }, [id]);

  console.log(id);
  console.log(reviewText);
  console.log(rating);

  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };

  const roundedRating = Math.round(rating);

  return (
    <>
      <div className=" ">
        <div className="flex justify-start gap-2 mt-4">
          {[...Array(roundedRating)].map((star, index) => (
            <FaStar key={index} size={20} color="yellow" />
          ))}
        </div>
        <div className="my-6">
          <p className="w-fit text-sm font-bold">
            average rating is {rating} star
          </p>
        </div>
        <ButtonSecondary onClick={() => handleModalToggle(true)}>
          Give your opinions
        </ButtonSecondary>

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
      </div>
    </>
  );
}
