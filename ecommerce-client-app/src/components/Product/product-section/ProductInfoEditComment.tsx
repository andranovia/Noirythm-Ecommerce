import React, { useState } from 'react';
import axiosInstance from '@/utils/api';
import ButtonPrimary from '@/components/button/ButtonPrimary';
import ButtonSecondary from '@/components/button/ButtonSecondary';

interface ProductInfoEditCommentProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  review: string;
  commentId: any;
}

const ProductInfoEditComment = ({
  setIsEditing,
  review,
  commentId,
}: ProductInfoEditCommentProps) => {
  const [editedReview, setEditedReview] = useState(review);

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axiosInstance.put(`/api/products/reviews/editComment/${commentId}`, {
        rating: 5,
        reviewText: editedReview,
      });

  
      console.log(response.data.message);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-sm font-semibold">Change your mind? </h2>
        <div className="p-3 rounded-md mt-4 shadow-ShadowCard">
          <input
            type="text"
            value={editedReview}
            onChange={(e) => setEditedReview(e.target.value)}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonSecondary onClick={handleCancelEdit}>Close</ButtonSecondary>
          <ButtonPrimary onClick={handleSaveEdit}>Save</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoEditComment;
