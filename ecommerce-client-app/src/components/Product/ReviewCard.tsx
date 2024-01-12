import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRating } from '../context/ratingContext';
import { useAuth } from '../hooks/useAuth';

import ProductInfoEditComment from './ProductInfoEditComment';

const ReviewCard = ({ index, review, handleDeleteComments}: any) => {
  const { ratingData } = useRating();
  const { ratings, userId, commentId } = ratingData;
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const [selectedCommentIndex, setSelectedCommentIndex] = useState<
    number | null
  >(null);
  

  const userIdsSet = new Set(userId);

  const handleEditComment = (index: number) => {
    setIsEditing(true);
    setSelectedCommentIndex(index);
  };

  

  return (
    <>
      <div
        key={index}
        className="relative p-4 sm:p-2 h-full flex flex-col justify-between rounded-md shadow-ShadowCard mt-6 sm:mt-0 w-[17rem] sm:w-[12rem]"
      >
        <div className="flex justify-start p-2">
          <p className="text-gray-600 font-bold">User Id: {userId[index]}</p>
        </div>
        <div className="flex justify-between p-2">
          <div className="flex justify-center gap-4">
            <div className="flex justify-center gap-2">
              <FaStar size={20} color={'yellow'} />
              <p>{ratings[index]}</p>
            </div>
            <p className="max-w-[10rem]">{review}</p>
            {userIdsSet.has(user?.id) ? (
              <>
                <button
                  onClick={() => handleEditComment(index)}
                  className="font-semibold"
                >
                  <Image
                    src={'https://img.icons8.com/ios/50/edit--v1.png'}
                    alt="edit"
                    width={20}
                    height={20}
                  />
                </button>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleDeleteComments(commentId[index])}
                    className="font-semibold"
                  >
                    <Image
                      src={'https://img.icons8.com/dotty/80/filled-trash.png'}
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

      {isEditing && selectedCommentIndex === index ? (
        <ProductInfoEditComment
          commentId={commentId[index]}
          review={review}
          setIsEditing={setIsEditing}
          ratingsValues={ratings[index]}
        />
      ) : null}
    </>
  );
};

export default ReviewCard;
