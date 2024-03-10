import { Dispatch, SetStateAction } from "react";
import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get(`/api/products/product`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching product", error);
    throw error;
  }
};

export const getProductsInfo = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/products/product/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching product info", error);
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

export const getProductsSearch = async (
  searchQuery: string,
  setSearchResultsVisible: Dispatch<SetStateAction<boolean>>
) => {
  try {
    if (searchQuery === "") {
      setSearchResultsVisible(false);
      return null;
    }
    const response = await axiosInstance.get(
      `/api/search?query=${searchQuery}`
    );
    const data = await response.data;
    setSearchResultsVisible(true);
    data.slice(0, 4);
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
