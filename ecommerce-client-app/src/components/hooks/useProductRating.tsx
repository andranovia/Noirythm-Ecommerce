  import { useState, useEffect } from 'react';
  import axiosInstance from '@/utils/api';
  import { useRating } from '@/components/context/ratingContext';
  import { useAuth } from './useAuth';

  export const useProductRating = (id: any) => {
    const { setRating, setReviewText, setAverageRating, setProductId } = useRating();
    const [commentId, setCommentId] = useState<number[]>([]);
    const { user } = useAuth();

    useEffect(() => {
      axiosInstance
        .get(`/api/products/reviews/userReview/${id}`)
        .then((response) => {
          if (response.status === 200) {
            setRating(response.data.ratings);
            setAverageRating(response.data.average_rating)
            if (Array.isArray(response.data.review_texts)) {
              setReviewText(response.data.review_texts);
            } else {
              setReviewText([response.data.review_texts]);
            }
            setCommentId(response.data.comment_id);
            setProductId(response.data.product_id)
          }
        
        })
        .catch((error) => {
          console.error('Error fetching average rating and reviewText', error);
        });
    }, [id]);
    
    const handleDeleteComments = (commentId: number) => {
      axiosInstance
        .delete(`api/products/reviews/deleteReview/${commentId}`, {
          params: {
            userId: user?.id
          }
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error deleting rating and review text', error);
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
