import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useRating } from '../../contexts/ratingContext';
import { useProductRating } from '../../hooks/useProductRating';
import ReviewCard from './ReviewCard';
import { FaStar } from 'react-icons/fa';

function OtherReviews() {
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const { handleDeleteComments } = useProductRating(search);
  const { ratingData } = useRating();
  const id = search !== null ? search : '';
  const averageRoundedRating = Math.round(ratingData.averageRating[id]);

  return (
    <div className="w-full h-full sm:flex flex-col gap-20">
      <div className="flex flex-col  justify-center items-center gap-2 ">
        <div className="flex justify-center items-center gap-2 my-2">
          <FaStar size={24} color={'yellow'} />
          <p className="font-bold text-5xl">
            {averageRoundedRating}
            <span className="text-gray-600 text-2xl">/5</span>
          </p>
        </div>
        <p className="ml-4 font-semibold text-gray-800 text-1xl">
          Average User Rating
        </p>
      </div>
      <div className="flex justify-center ">
        {ratingData.reviewText.map((review, Index) => (
          <React.Fragment key={Index}>
            <ReviewCard
              index={Index}
              review={review}
              handleDeleteComments={handleDeleteComments}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default OtherReviews;
