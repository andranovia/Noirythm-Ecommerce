import axiosInstance from "../api/axiosInstance";

export const getCart = async (user: number) => {
  try {
    const response = await axiosInstance.get(`/api/cart/get`, {
      params: { userId: user },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
