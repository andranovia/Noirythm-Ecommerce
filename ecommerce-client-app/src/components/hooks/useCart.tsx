import axiosInstance from '@/utils/api';
import { getCart } from '../utils/getCart';
import { useAuth } from './useAuth';
import { useEffect, useState, useCallback } from 'react';

interface Product {
  id: string;
  product_description: string;
  product_image: string;
  product_name: string;
  product_price: string;
}

interface CartData {
  cartProducts: Product[];
}

export const useCart = () => {
  const { user } = useAuth();
  const [userCart, setUserCart] = useState<CartData>({ cartProducts: [] });

  const fetchCart = useCallback(async () => {
    try {
      if (user) {
        const response = await getCart(user);
        setUserCart(response);
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }, [user]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

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

        const response = await axiosInstance.delete('/api/cart/delete', payload);
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
