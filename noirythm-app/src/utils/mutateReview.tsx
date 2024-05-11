import axiosInstance from "./axiosInstance";

interface postReviewDataProps {
  postReviewData?: {
    reviewRating: number;
    reviewText: string;
  };
  id?: string;
  userId: number;
}

interface deleteReviewProps {
  deleteReviewData: {
    reviewId?: number;
    userId: number;
  };
}

interface updateReviewProps {
  updateReviewData?: {
    editedRating: number;
    editedReviewText: string;
  };
  reviewId?: number;
  userId: number;
}

export const postReview = async ({
  postReviewData,
  id,
  userId,
}: postReviewDataProps) => {
  const data = {
    rating: postReviewData?.reviewRating,
    review_text: postReviewData?.reviewText,
    user_id: userId,
  };

  try {
    const response = await axiosInstance.post(
      `/api/products/reviews/${id}`,
      data
    );

    if (response.status === 201) {
      console.log("Review has been submitted successfully.");
      return true;
    }
  } catch (error: any) {
    console.error("Error submitting review", error);
    return false;
  }
};

export const deleteReview = async ({ deleteReviewData }: deleteReviewProps) => {
  try {
    const response = await axiosInstance.delete(
      `api/products/reviews/deleteReview/${deleteReviewData.reviewId}`,
      {
        params: {
          userId: deleteReviewData.userId,
        },
      }
    );

    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error("Error deleting review", error);
    return false;
  }
};

export const updateReview = async ({
  updateReviewData,
  reviewId,
  userId,
}: updateReviewProps) => {
  try {
    const response = await axiosInstance.put(`/api/products/reviews/editReview/${reviewId}`, {
      rating: updateReviewData?.editedRating,
      review_text: updateReviewData?.editedReviewText,
      userId: userId,
    });
    
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error("Error editing review", error);
    return false
  }
};
