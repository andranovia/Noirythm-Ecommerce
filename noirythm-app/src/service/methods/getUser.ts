import axiosInstance from "../api/axiosInstance";
export const getUser = async () => {
  const token = window.localStorage.getItem("access_token");

  try {
    const response = await axiosInstance.get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
