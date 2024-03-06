import ButtonPrimary from '@/components/button/ButtonPrimary';
import ButtonSecondary from '@/components/button/ButtonSecondary';
import React, { useCallback, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRating } from '../../../contexts/ratingContext';
import ProductInfoRatingInput from '../productInfo/ProductInfoRatingInput';
import ReviewCard from './ReviewCard';
import { useProductRating } from '../../../hooks/useProductRating';
import { useAuth } from '../../../hooks/useAuth';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type ProductReviewsProps = {
  id: any;
};

export default function ProductReviews({ id }: ProductReviewsProps) {
  const [rateColor] = useState(null);
  const { user } = useAuth();
  const { ratingData } = useRating();
  const [commentModal, setCommentModal] = useState(false);
  const searchParams = useSearchParams();

  const queryToString = useCallback(
    (id: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(id, value);

      return params.toString();
    },
    [searchParams]
  );

  const { handleDeleteComments } = useProductRating(id);

  const averageRoundedRating = Math.round(ratingData.averageRating[id]);
  const userIdsSet = new Set(ratingData.userId);

  const productIdsSet = new Set(ratingData.productId);

  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < averageRoundedRating; i++) {
      stars.push(<FaStar key={i} size={20} color="yellow" />);
    }
    return stars;
  };

  const renderRating = () =>
    ratingData.reviewText.slice(0, 2).map((review, index) => (
      <React.Fragment key={index}>
        <ReviewCard
          index={index}
          review={review}
          handleDeleteComments={handleDeleteComments}
        />
      </React.Fragment>
    ));

  const reviewContent = productIdsSet.has(id) ? (
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
          <Link href={'/review' + '/others' + '?' + queryToString('id', id)}>
            <ButtonSecondary>Show others</ButtonSecondary>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="w-[17rem] p-4 rounded-md shadow-ShadowCard mt-10">
        <h1 className="">there is currently no comment</h1>
      </div>

      {userIdsSet.has(user?.id) ? null : (
        <div className={'relative mt-10 z-2'}>
          {!user?.id ? (
            <div className={!user?.id ? `relative mt-10` : 'hidden'}>
              <Link href={'/auth/login'}>
                <ButtonPrimary>Login</ButtonPrimary>
              </Link>
            </div>
          ) : (
            <ButtonPrimary onClick={() => handleModalToggle(true)}>
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
