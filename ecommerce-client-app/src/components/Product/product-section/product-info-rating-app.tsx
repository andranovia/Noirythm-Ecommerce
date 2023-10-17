import ButtonPrimary from '@/components/button/button-primary-app';
import ButtonSecondary from '@/components/button/button-secondary-app';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ProductInfoRating() {
  const [rating, setrating] = useState(0);
  const [rateColor, setRateColor] = useState(null);
  const [commentModal, setCommentModal] = useState(false);

  const handleModalOpen = () => {
    setCommentModal(true);
  };

  const handleModalClose = () => {
    setCommentModal(false);
  };

  

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
        <ButtonSecondary onClick={handleModalOpen}>
          Give your opinions
        </ButtonSecondary>
        {commentModal && (
          <div className="fixed border">
            <textarea placeholder="Write your comment here..." />
            <button>Submit Comment</button>
          </div>
        )}

        {commentModal && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-10 rounded-lg">
              <h2 className='text-sm font-semibold'>Tell us your mind!</h2>
              <div className="flex justify-start gap-2 mb-10">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <>
                      <div className="mr-2">
                        <input
                          type="radio"
                          name="rating"
                          className="relative left-6 opacity-0 sm:top-6 sm:left-1"
                          value={currentRating}
                          onClick={() => setrating(currentRating)}
                        />
                        <label className="cursor-pointer">
                          <FaStar
                            size={20}
                            color={
                              currentRating <= (rateColor || rating)
                                ? 'yellow'
                                : 'grey'
                            }
                          />
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className='text-sm font-normal text-gray-700'>
                <input className='border-b-gray-700 border-2 focus:outline-none w-full h-20 rounded-sm mb-10 p-3' placeholder='This product cool..' type="text" />
              </div>
              <div className='flex justify-center'>
              <ButtonSecondary onClick={handleModalClose}>Close</ButtonSecondary>
              <ButtonPrimary>Send</ButtonPrimary>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
