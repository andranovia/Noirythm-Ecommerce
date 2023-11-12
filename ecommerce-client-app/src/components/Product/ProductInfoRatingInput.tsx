import axiosInstance from '@/utils/api';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface ProductInfoRatingInputProps {
  rateColor: string | null;
  children?: React.ReactNode;
  id: any;
}

const ProductInfoRatingInput = ({
  rateColor,
  children,
  id,
}: ProductInfoRatingInputProps) => {
    const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      rating: rating,
      reviewText: reviewText,
    };

    try {
      const response = await axiosInstance.post(
        `/api/products/reviews/${id}`,
        data
      );

      if (response.status === 201) {
        console.log('Review has been submitted successfully.');
        setRating(0);
        setReviewText('');
        setErrorMessage('');
      } else {
        console.log('Review submission was not successful.');
        setErrorMessage('Review submission was not successful.');
      }
    } catch (error: any) {
      console.error('Error submitting review', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error submitting review. Please try again later.');
      }
    }
  };

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
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    size={20}
                    color={
                      currentRating <=
                      (typeof rateColor === 'number' ? rateColor : rating)
                        ? 'yellow'
                        : 'grey'
                    }
                  />
                </label>
              </div>
            );
          })}
        </div>
        <form onSubmit={submitHandler}>
          <div className="text-sm font-normal text-gray-700">
            <input
              className="border-b-gray-700 border-2 focus:outline-none w-full h-20 rounded-sm mb-10 p-3"
              placeholder="This product is cool.."
              type="text"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            {errorMessage && (
              <p className="text-red-500 font-semibold relative bottom-8">
                {errorMessage}
              </p>
            )}
          </div>
          <div className="flex justify-center">{children}</div>
        </form>
      </div>
    </div>
  );
};

export default ProductInfoRatingInput;
