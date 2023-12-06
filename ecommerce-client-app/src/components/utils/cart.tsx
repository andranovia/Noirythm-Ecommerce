import axiosInstance from '@/utils/api';

export const getCart = async (user: any) => {
  try {
    if (!user) {
      throw new Error('Access token is missing');
    }

    const response = await axiosInstance.get(`/api/cart/get`, user.id);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
