import axiosInstance from "@/utils/api";


export const getUser = async (accessToken: string | null) => {
  try {
    if (!accessToken) {
      throw new Error('Access token is missing');
    }

    const response = await axiosInstance.get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
