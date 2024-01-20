import axiosInstance from '@/utils/api';
import { useEffect } from 'react';
import { useProductContext } from '../context/productContext';

export const useProduct = () => {
  const { setProductItems, setLoading } = useProductContext();

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchProductItems = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/api/products/cloth');
        setProductItems(response.data);
      } catch (error) {
        console.error('Error fetching clothing items:', error);
      } finally {
        await sleep(1000);
        setLoading(false);
      }
    };

    fetchProductItems();
  }, []);
};
