import ButtonPrimary from '@/components/button/button-primary-app';
import ButtonSecondary from '@/components/button/button-secondary-app';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductInfoRatingInput from './product-info-rating-input-app';
import ProductInfoRatingCommentModal from './product-info-rating-commentmodal-app';
import axiosInstance from '@/utils/api';
import ProductInfoEditComment from './product-info-editcomment-app';
import Image from 'next/image';

export default function ProductInfoRating({ id }: any) {
  const [rateColor] = useState(null);
  const [rating, setRating] = useState(0);
  const [commentModal, setCommentModal] = useState(false);
  const [reviewText, setReviewText] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState<number | null>(null);
  const [commentId, setCommentId] = useState<number[]>([]);

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
          setCommentId(response.data.commentId);
          console.log(commentId);
        }
      })
      .catch((error) => {
        console.error('Error fetching average rating and reviewText', error);
      });
  }, [id]);

  const handleDeleteComments = (commentId: number) => {
    axiosInstance
      .delete(`api/products/reviews/DeleteUserComment/${commentId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error deleting rating and reviewText', error);
      });
  };

  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };

  const handleEditComment = (commentId: any, index: number) => {
    setIsEditing(true);
    setCommentId(commentId);
    setSelectedCommentIndex(index);
    console.log(commentId);
  };

  const roundedRating = Math.round(rating);

  return (
    <>
      <div className={reviewText.length > 0 ? `mb-[18rem]` : `mb-[6rem]`}>
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
              <div className="relative top-10 sm:top-6 sm:grid sm:gap-20 grid-cols-2">
                {reviewText.slice(0, 2).map((review, index) => (
                  <>
                    <div
                      key={index}
                      className="p-4 sm:p-2 flex justify-between rounded-md shadow-ShadowCard mt-6 sm:mt-0 w-[17rem] sm:w-40"
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
