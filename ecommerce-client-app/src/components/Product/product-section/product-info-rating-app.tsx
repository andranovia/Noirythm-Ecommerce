import ButtonPrimary from '@/components/button/button-primary-app';
import ButtonSecondary from '@/components/button/button-secondary-app';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductInfoRatingInput from './product-info-rating-input-app';

export default function ProductInfoRating({ id }: any) {
  const [rateColor] = useState(null);
  const [rating, setRating] = useState(0);
  const [commentModal, setCommentModal] = useState(false);

  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };
  useEffect(() => {});

  console.log(id);

  return (
    <>
      <div className=" ">
        <div className="flex justify-start gap-2 mt-4">
          {[...Array(rating)].map((star, index) => (
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
            <ProductInfoRatingInput
              rating={rating}
              setRating={setRating}
              rateColor={rateColor}
              id={id}
            >
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
