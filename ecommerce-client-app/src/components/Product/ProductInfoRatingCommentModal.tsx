import ButtonPrimary from '@/components/button/ButtonPrimary';
import React, { Dispatch, SetStateAction } from 'react';
import ProductInfoEditComment from './ProductInfoEditComment';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useProductRating } from '../hooks/useProductRating';
import { useAuth } from '../hooks/useAuth';

interface ProductInfoRatingCommentModalProps {
  data: {
    id: any;
    ratings: any;
    reviewText: string[];
    setShowMore: Dispatch<SetStateAction<boolean>>;
    editing: {
      isEditing: boolean;
      setIsEditing: Dispatch<SetStateAction<boolean>>;
      selectedCommentIndex: number | null;
    };
    comments: {
      commentId: number[];
      handleEditComment: (commentId: any, index: number) => void;
    };
    userId: any;
    userIdsSet: any;
  };
}

const ProductInfoRatingCommentModal = ({
  data: {
    id,
    ratings,
    reviewText,
    setShowMore,
    editing: { isEditing, setIsEditing, selectedCommentIndex },
    comments: { commentId, handleEditComment },
    userId,
    userIdsSet,
  },
}: ProductInfoRatingCommentModalProps) => {
  const { handleDeleteComments } = useProductRating(id);
  const { user } = useAuth();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-sm font-semibold">What others mind say!</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {reviewText.map((review, index) => (
            <React.Fragment key={index}>
              <div className="p-4 rounded-md shadow-ShadowCard mt-6 w-[15rem] flex flex-col justify-between">
                <div className="flex justify-start p-2">
                  <p className="text-gray-600 font-bold">
                    User Id: {userId[index]}
                  </p>
                </div>
                <div className="flex justify-between p-2">
                  <div className="flex justify-center gap-4">
                    <div className="flex justify-center gap-2">
                      <FaStar size={20} color={'yellow'} />
                      <p>{ratings[index]}</p>
                    </div>
                    <p>{review}</p>
                  </div>
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
                            src={
                              'https://img.icons8.com/dotty/80/filled-trash.png'
                            }
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

              {isEditing && selectedCommentIndex === index && (
                <ProductInfoEditComment
                  ratingsValues={ratings[index]}
                  commentId={commentId[index]}
                  review={review}
                  setIsEditing={setIsEditing}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-10">
          <ButtonPrimary onClick={() => setShowMore(false)}>
            Close button
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoRatingCommentModal;
