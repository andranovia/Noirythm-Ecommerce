import axiosInstance from '@/utils/api';
import { getCart } from '../utils/cart';
import { useAuth } from './useAuth';
import { useEffect, useState } from 'react';

export const useCart = () => {
  const { user } = useAuth();
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (user) {
          const response = await getCart(user);
          setUserCart(response);
        } else {
          console.log('user not found')
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, [user]);

  const addToCart = async (productId: any) => {
    console.log(productId);
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
  };

  return {
    addToCart,
    userCart,
  };
};
