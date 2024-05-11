import { useAuth } from "./useAuth";
import { useMutation } from "@tanstack/react-query";
import { deleteReview, postReview, updateReview } from "@/utils/mutateReview";
import { useChanges } from "@/context/ChangesContext";

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
  const { setIsChangesSaved } = useChanges();

  const { mutateAsync: deleteReviewMutation } = useMutation({
    mutationFn: () =>
      deleteReview({
        deleteReviewData: { userId: user.id, reviewId: reviewId },
      }),
    onSuccess: (success) => {
      if (success) {
        setIsChangesSaved(true);
      } else {
        console.log("Delete review failed");
      }
    },
  });

  const { mutateAsync: addReviewMutation } = useMutation({
    mutationFn: () =>
      postReview({ id: id, postReviewData: addData, userId: user?.id }),
    onSuccess: (success) => {
      if (success) {
        setIsChangesSaved(true);
      } else {
        console.log("Submit review failed");
      }
    },
  });

  const { mutateAsync: updateReviewMutation } = useMutation({
    mutationFn: () =>
      updateReview({
        updateReviewData: editedData,
        userId: user?.id,
        reviewId: reviewId,
      }),
      onSuccess: (success) => {
        if (success) {
          setIsChangesSaved(true);
        } else {
          console.log("Edit review failed");
        }
      },
  });

  return {
    addReviewMutation,
    updateReviewMutation,
    deleteReviewMutation,
  };
};
