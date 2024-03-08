import axiosInstance from "./axiosInstance";

export const getProductReviews = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/products/reviews/userReview/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
