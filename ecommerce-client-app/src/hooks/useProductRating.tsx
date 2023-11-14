import { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import { useRating } from '@/components/context/ratingContext';

export const useProductRating = (id: any) => {
  const { setRating, setReviewText } = useRating();
  const [commentId, setCommentId] = useState<number[]>([]);

  useEffect(() => {
    axiosInstance
      .get(`/api/products/reviews/UserComment/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setRating(id, response.data.rating);
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
  



  return { commentId, setCommentId, handleDeleteComments };
};
