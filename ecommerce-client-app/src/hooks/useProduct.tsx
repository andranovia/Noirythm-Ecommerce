import axiosInstance from '@/utils/api';
import { useEffect } from 'react';
import { useProductContext } from '../contexts/productContext';

export const useProduct = () => {
  const { setProductItems, setLoading } = useProductContext();

  
};
