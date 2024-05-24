'use client'

import { getCart } from "@/utils/getCart";
import { useAuth } from "./useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCartItem, postCartItem } from "@/utils/mutateCart";
import { useChanges } from "@/context/ChangesContext";

export const useCart = (productId?: string ) => {
  const { user } = useAuth();
  const { setIsChangesSaved } = useChanges()

  const { data: userCart, isLoading: userCartLoading } = useQuery({
    queryKey: ["userCart"],
    queryFn: () => getCart(user.id),
  });

  
  const { mutateAsync: addToCart } =  useMutation({
    mutationFn: () =>
      postCartItem({
        postCartItemData: { productId: productId, userId: user?.id },
      }),
    onSuccess: (success) => {
      if (success) {
        setIsChangesSaved(true)
      } else {
        console.log('Add item to cart failed');
      }
   
    }
  });

  const { mutateAsync: removeFromCart } = useMutation({
    mutationFn: () =>
      deleteCartItem({
        deleteCartItemData: { productId: productId, userId: user?.id },
      }),
      onSuccess: (success) => {
        if (success) {

          setIsChangesSaved(true)
        } else {
          console.log('Remove item from cart failed');
        }
      }
  });

  return {
    addToCart,
    userCart,
    removeFromCart,
    userCartLoading
  };
};
