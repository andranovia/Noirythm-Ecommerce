import axiosInstance from "../api/axiosInstance";

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
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error("cart item cannot added to cart", error);
    return false;
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
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error("cart item cannot removed from cart", error);
    return false;
  }
};
