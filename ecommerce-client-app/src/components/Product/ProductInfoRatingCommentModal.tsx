import ButtonPrimary from '@/components/button/ButtonPrimary';
import React, { Dispatch, SetStateAction } from 'react';
import ProductInfoEditComment from './ProductInfoEditComment';
import Image from 'next/image';

interface ProductInfoRatingCommentModalProps {
  data: {
    reviewText: string[];
    setShowMore: Dispatch<SetStateAction<boolean>>;
    editing: {
      isEditing: boolean;
      setIsEditing: Dispatch<SetStateAction<boolean>>;
      selectedCommentIndex: number | null;
    };
    comments: {
      commentId: number[];
      handleEditComment: (commentId: any, index: number) => void
    };
  };
}

const ProductInfoRatingCommentModal = ({
  data: {
    reviewText,
    setShowMore,
    editing: { isEditing, setIsEditing, selectedCommentIndex },
    comments: { commentId, handleEditComment },
  },
}: ProductInfoRatingCommentModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-sm font-semibold">What others mind say!</h2>
        {reviewText.map((review, index) => (
          <React.Fragment key={index}>
            <div className="p-4 rounded-md shadow-ShadowCard mt-6 w-[15rem] flex justify-between">
              <p>{review}</p>
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

            {isEditing && selectedCommentIndex === index && (
              <ProductInfoEditComment
                commentId={commentId[index]}
                review={review}
                setIsEditing={setIsEditing}
              />
            )}
          </React.Fragment>
        ))}

        <div className="mt-10">
          <ButtonPrimary onClick={() => setShowMore(false)}>Close button</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoRatingCommentModal;