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
    }
  } catch (error: any) {
    console.error("Error submitting review", error);
  }
};

export const deleteReview = async ({ deleteReviewData }: deleteReviewProps) => {
  axiosInstance
    .delete(`api/products/reviews/deleteReview/${deleteReviewData.reviewId}`, {
      params: {
        userId: deleteReviewData.userId,
      },
    })
    .catch((error) => {
      console.error("Error deleting rating and review text", error);
    });
};

export const updateReview = async ({
  updateReviewData,
  reviewId,
  userId,
}: updateReviewProps) => {
  try {
    axiosInstance.put(`/api/products/reviews/editReview/${reviewId}`, {
      rating: updateReviewData?.editedRating,
      review_text: updateReviewData?.editedReviewText,
      userId: userId,
    });
  } catch (error) {
    console.error(error);
  }
};
