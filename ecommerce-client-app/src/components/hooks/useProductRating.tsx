import { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import { useRating } from '@/components/context/ratingContext';
import { useAuth } from './useAuth';

export const useProductRating = (id: any) => {
  const { setRating, setReviewText } = useRating();
  const [commentId, setCommentId] = useState<number[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosInstance
      .get(`/api/products/reviews/UserComment/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setRating(id, response.data.rating);
          if (Array.isArray(response.data.review_text)) {
            setReviewText(response.data.review_text);
          } else {
            setReviewText([response.data.review_text]);
          }
          setCommentId(response.data.comment_id);
        }
        console.log(response.data.review_text)
      })
      .catch((error) => {
        console.error('Error fetching average rating and reviewText', error);
      });
  }, [id]);
  
  const handleDeleteComments = (commentId: number) => {
    axiosInstance
      .delete(`api/products/reviews/DeleteUserComment/${commentId}`, {
        params: {
          userId: user?.id
        }
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error deleting rating and reviewText', error);
      });
  };
  

  const [userRating, setUserRating] = useState(0);
  const [reviewUserText, setReviewUserText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      rating: userRating,
      review_text: reviewUserText,
      userId: user?.id,
    };

    try {
      const response = await axiosInstance.post(
        `/api/products/reviews/${id}`,
        data
      );

      if (response.status === 201) {
        console.log('Review has been submitted successfully.');
        setUserRating(0);
        setReviewUserText('');
        setErrorMessage('');
      } else {
        console.log('Review submission was not successful.');
        setErrorMessage('Review submission was not successful.');
      }
    } catch (error: any) {
      console.error('Error submitting review', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error submitting review. Please try again later.');
      }
    }
  };

  return {
    commentId,
    setCommentId,
    handleDeleteComments,
    submitHandler,
    errorMessage,
    reviewUserText,
    setReviewUserText,
    userRating,
    setUserRating,
  };
};
