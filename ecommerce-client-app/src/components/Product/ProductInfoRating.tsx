import ButtonPrimary from '@/components/button/ButtonPrimary';
import ButtonSecondary from '@/components/button/ButtonSecondary';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRating } from '../context/ratingContext';
import ProductInfoRatingInput from './ProductInfoRatingInput';
import ReviewCard from './ReviewCard';
import { useProductRating } from '../hooks/useProductRating';

export default function ProductInfoRating({ id }: any) {
  const [rateColor] = useState(null);

  const { ratingData } = useRating();
  const [commentModal, setCommentModal] = useState(false);

  const { reviewText, averageRating, productId } = ratingData;

  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };
  
  const { handleDeleteComments } =
    useProductRating(id);

  const productIdsSet = new Set(productId);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < averageRoundedRating; i++) {
      stars.push(<FaStar key={i} size={20} color="yellow" />);
    }
    return stars;
  };


  const renderComments = () => {
    return reviewText.slice(0, 2).map((review, index) => (
      <React.Fragment key={index}>
        <ReviewCard index={index} review={review} id={id} handleDeleteComments={handleDeleteComments}/>
      </React.Fragment>
    ));
  };

  const averageRoundedRating = Math.round(averageRating[id]);

  return (
    <>
      <div className={`h-auto `}>
        {productIdsSet.has(id) ? (
          <>
            <div className="flex justify-start gap-2 mt-4">{renderStars()}</div>
            <div className="my-6">
              <p className="w-fit text-sm font-bold ">
                average rating is {averageRoundedRating} star
              </p>
            </div>

            <div className="bg-gray-300 w-[17rem] h-2 relative mt-4 mb-[14rem]">
              <div className="relative top-10 sm:top-6 sm:grid sm:gap-40 grid-cols-2">
                {renderComments()}
              </div>
              <div className="sm:mt-[3rem] mt-[4rem]">
                <ButtonSecondary>Show others</ButtonSecondary>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={'relative mt-10'}>
              <ButtonPrimary onClick={() => handleModalToggle(true)}>
                Give your opinions
              </ButtonPrimary>
            </div>
            <div className="w-[17rem] p-4 rounded-md shadow-ShadowCard mt-10">
              <h1 className="">there is currently no comments</h1>
            </div>
          </>
        )}
        <div>
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
      </div>
    </>
  );
}
