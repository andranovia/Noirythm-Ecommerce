import axiosInstance from '@/utils/api';

export const getCart = async (user: any) => {
  try {
    if (!user) {
      throw new Error('User not found');
    }

    const response = await axiosInstance.get(`/api/cart/get`, {
      params: { userId: user.id },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};
