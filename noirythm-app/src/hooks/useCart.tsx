import { getCart } from "@/utils/getCart";
import { useAuth } from "./useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCartItem, postCartItem } from "@/utils/mutateCart";

export const useCart = (productId: string) => {
  const { user } = useAuth();

  const { data: userCart } = useQuery({
    queryKey: ["userCart"],
    queryFn: () => getCart(user.id),
  });

  const { mutateAsync: addToCart } = useMutation({
    mutationFn: () =>
      postCartItem({
        postCartItemData: { productId: productId, userId: user?.id },
      }),
  });

  const { mutateAsync: removeFromCart } = useMutation({
    mutationFn: () =>
      deleteCartItem({
        deleteCartItemData: { productId: productId, userId: user?.id },
      }),
  });

  return {
    addToCart,
    userCart,
    removeFromCart,
  };
};
