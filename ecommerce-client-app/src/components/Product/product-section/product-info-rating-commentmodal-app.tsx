import ButtonPrimary from '@/components/button/button-primary-app';
import React from 'react';

interface ProductInfoRatingCommentModalProps {
  reviewText: string[];
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductInfoRatingCommentModal = ({
  reviewText,
  setShowMore,
}: ProductInfoRatingCommentModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-sm font-semibold">What others mind say!</h2>
        {reviewText.map((review, index) => (
          <div className="p-4 rounded-md shadow-ShadowCard mt-6 w-[15rem]">
            <p key={index}>{review}</p>
          </div>
        ))}
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
