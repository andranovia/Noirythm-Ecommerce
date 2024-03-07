import axiosInstance from '@/utils/axiosInstance';
import { getCart } from '@/utils/getCart';
import { useAuth } from './useAuth';
import { useEffect, useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';



export const useCart = () => {
  const { user } = useAuth();

  const { data: userCart } = useQuery({
    queryKey: ["userCart"],
    queryFn: () => getCart(user.id),
  });
 

  const addToCart = useCallback(
    async (productId: any) => {
      try {
        const userId = user?.id;
        const payload = {
          userId: userId,
          productId: productId,
        };

        const response = await axiosInstance.post('/api/cart/add', payload);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    [user]
  );

  const removeFromCart = useCallback(
    async (productId: any) => {
      try {
        const userId = user?.id;
        const payload = {
          data: {
            userId: userId,
            productId: productId,
          },
        };

        const response = await axiosInstance.delete(
          '/api/cart/delete',
          payload
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    [user]
  );

  return {
    addToCart,
    userCart,
    removeFromCart,
  };
};
