import axiosInstance from '@/utils/api';
import { useAuth } from './useAuth';

export const useCart = () => {
  const { user } = useAuth();

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
  };
};
