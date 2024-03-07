import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get(`/api/products/product`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const getProductsInfo  = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/products/product/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const getProductsPromo = async () => {
  try {
    const response = await axiosInstance.get(`/api/products/productPromo`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching product promo:", error);
    throw error;
  }
};
