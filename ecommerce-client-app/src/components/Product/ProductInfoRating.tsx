import ButtonPrimary from '@/components/button/ButtonPrimary';
import ButtonSecondary from '@/components/button/ButtonSecondary';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRating } from '../context/ratingContext';
import ProductInfoRatingInput from './ProductInfoRatingInput';
import ProductInfoRatingCommentModal from './ProductInfoRatingCommentModal';
import ProductInfoEditComment from './ProductInfoEditComment';
import Image from 'next/image';
import { useProductRating } from '@/components/hooks/useProductRating';
import { useAuth } from '../hooks/useAuth';

export default function ProductInfoRating({ id }: any) {
  const [rateColor] = useState(null);
  const { user } = useAuth();
  const { ratingData } = useRating();
  const [commentModal, setCommentModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [selectedCommentIndex, setSelectedCommentIndex] = useState<
    number | null
  >(null);
  
  
  const { reviewText, ratings, averageRating, productId, userId } = ratingData;

  const { commentId, setCommentId, handleDeleteComments } =
    useProductRating(id);

  const handleModalToggle = (open: boolean) => {
    setCommentModal(open);
  };

  const productIdsSet = new Set(productId);
  const userIdsSet = new Set(userId);

  const handleEditComment = (commentId: any, index: number) => {
    setIsEditing(true);
    setCommentId(commentId);
    setSelectedCommentIndex(index);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < averageRoundedRating; i++) {
      stars.push(<FaStar key={i} size={20} color="yellow" />);
    }
    return stars;
  };

  const renderComments = () => {
    return reviewText.slice(0, 2).map((review, index) => (
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
    ));
  };

  const averageRoundedRating = Math.round(averageRating[id]);

  const childData = {
    id,
    ratings,
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
    userId,
    userIdsSet,
  };
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
                <ButtonSecondary onClick={() => setShowMore(true)}>
                  Show others
                </ButtonSecondary>
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
