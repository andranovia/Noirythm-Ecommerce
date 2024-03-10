import { useAuth } from "./useAuth";
import { useMutation } from "@tanstack/react-query";
import { deleteReview, postReview, updateReview } from "@/utils/mutateReview";

interface useProductRatingProps {
  addData?: {
    reviewRating: number;
    reviewText: string;
  };
  id?: string;
  reviewId?: number;
  editedData?: {
    editedRating: number;
    editedReviewText: string;
  };
}

export const useProductRating = ({
  addData,
  id,
  reviewId,
  editedData,
}: useProductRatingProps) => {
  const { user } = useAuth({});

  const { mutateAsync: deleteReviewMutation } = useMutation({
    mutationFn: () =>
      deleteReview({
        deleteReviewData: { userId: user.id, reviewId: reviewId },
      }),
  });

  const { mutateAsync: addReviewMutation } = useMutation({
    mutationFn: () =>
      postReview({ id: id, postReviewData: addData, userId: user?.id }),
  });

  const { mutateAsync: updateReviewMutation } = useMutation({
    mutationFn: () =>
      updateReview({
        updateReviewData: editedData,
        userId: user?.id,
        reviewId: reviewId,
      }),
  });

  return {
    addReviewMutation,
    updateReviewMutation,
    deleteReviewMutation,
  };
};
