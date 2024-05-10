import axiosInstance from "./axiosInstance";

interface postCartItemProps {
  postCartItemData: {
    productId?: string;
    userId: number;
  };
}

interface deleteCartItemProps {
  deleteCartItemData: {
    productId?: string;
    userId: number;
  };
}

export const postCartItem = async ({ postCartItemData }: postCartItemProps) => {
  try {
    const payload = {
      userId: postCartItemData.userId,
      productId: postCartItemData.productId,
    };

    const response = await axiosInstance.post("/api/cart/add", payload);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteCartItem = async ({
  deleteCartItemData,
}: deleteCartItemProps) => {
  try {
    const userId = deleteCartItemData.userId;
    const payload = {
      data: {
        userId: userId,
        productId: deleteCartItemData.productId,
      },
    };

    const response = await axiosInstance.delete("/api/cart/delete", payload);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
