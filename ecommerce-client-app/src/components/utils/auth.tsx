import axiosInstance from "@/utils/api";



export const getUser = async () => {
  try {
    const response = await axiosInstance.get(`/api/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};