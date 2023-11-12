import React, { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import('../ProductCard'));



interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: number;
}

interface ShoesProductProps {
  maxItems?: number;
  desc: boolean;
  className : string | {} | null;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ShoesProduct: React.FC<ShoesProductProps> = ({ maxItems, desc, className }) => {
  const [ProductItems, setProductItems] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchProductItems = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/api/products/shoes');
        setProductItems(response.data);
      } catch (error) {
        console.error('Error fetching Shoesing items:', error);
      } finally {
        await sleep(1000);
        setLoading(false);
       
      }
    };

    fetchProductItems();
  }, []);

  const displayedItems = maxItems === Infinity ? ProductItems : ProductItems.slice(0, maxItems);

  return <ProductCard ProductItems={displayedItems} loading={loading} desc={desc} className={className}/>;
};

export default ShoesProduct;
