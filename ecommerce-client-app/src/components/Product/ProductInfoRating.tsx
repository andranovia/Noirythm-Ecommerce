import ButtonPrimary from '@/components/button/ButtonPrimary';
import ButtonSecondary from '@/components/button/ButtonSecondary';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRating } from '../context/ratingContext';
import ProductInfoRatingInput from './ProductInfoRatingInput';
import ProductInfoRatingCommentModal from './ProductInfoRatingCommentModal';
import ProductInfoEditComment from './ProductInfoEditComment';
import Image from 'next/image';
import { useProductRating } from '@/hooks/useProductRating';

export default function ProductInfoRating({ id }: any) {
  const [rateColor] = useState(null);
  const { ratings, reviewText} = useRating();
  const [commentModal, setCommentModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState<
    number | null
  >(null);

  const { commentId, setCommentId, handleDeleteComments } = useProductRating(id);


  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };

  const handleEditComment = (commentId: any, index: number) => {
    setIsEditing(true);
    setCommentId(commentId);
    setSelectedCommentIndex(index);
    console.log(commentId);
  };

  const productRating = ratings[id] || 0;
  const roundedRating = Math.round(productRating);

  const childData = {
    reviewText,
    setShowMore,
    editing: {
      isEditing,
      setIsEditing,
      selectedCommentIndex,
    },
    comments: {
      commentId,
      handleEditComment,
    },
  };
  return (
    <>
      <div className={reviewText.length > 0 ? `mb-[18rem]` : `mb-[6rem]`}>
        <div className="flex justify-start gap-2 mt-4">
          {isValidArrayLength(roundedRating) &&
            [...Array(roundedRating)].map((_, index) => (
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
              <div className="relative top-10 sm:top-6 sm:grid sm:gap-40 grid-cols-2">
                {reviewText.slice(0, 2).map((review, index) => (
                  <>
                    <div
                      key={index}
                      className="p-4 sm:p-2 flex justify-between rounded-md shadow-ShadowCard mt-6 sm:mt-0 w-[17rem] sm:w-[12rem]"
                    >
                      <div className="flex justify-center gap-4">
                        <p className="max-w-[10rem]">{review}</p>
                        <button
                          onClick={() => handleEditComment(commentId, index)}
                          className="font-semibold"
                        >
                          <Image
                            src={'https://img.icons8.com/ios/50/edit--v1.png'}
                            alt="edit"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleDeleteComments(commentId[index])}
                          className="font-semibold"
                        >
                          <Image
                            src={
                              'https://img.icons8.com/dotty/80/filled-trash.png'
                            }
                            alt="edit"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                    </div>

                    {isEditing && selectedCommentIndex === index ? (
                      <ProductInfoEditComment
                        commentId={commentId[index]}
                        review={review}
                        setIsEditing={setIsEditing}
                      />
                    ) : null}
                  </>
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
              <h1 className="">there is currently no comments</h1>
            </div>
          )}
        </div>
        <div>
          <div
            className={
              reviewText.length > 0
                ? `relative top-[16rem] sm:top-24 sm:left-40`
                : `relative top-20  `
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
              <ProductInfoRatingCommentModal data={childData} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
function isValidArrayLength(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}
