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
          const userCart = await getCart(user?.id);
          setUserCart(userCart);
        } else {
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async ({ productId }: any) => {
    let payload = {
      userId: user?.id,
      productId: productId,
    };
    axiosInstance
      .post('api/cart/add', payload)
      .then((e) => {
        console.log(e);
      })
      .catch((r) => {
        console.log(r);
      });
  };

  return {
    addToCart,
    userCart,
  };
};
