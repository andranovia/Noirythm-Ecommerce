import axiosInstance from "./axiosInstance";


export const getUser = async (accessToken: string | null) => {
  try {
    if(accessToken !== null){
      const response = await axiosInstance.get(`/api/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      return response.data;
    }
    return null
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
