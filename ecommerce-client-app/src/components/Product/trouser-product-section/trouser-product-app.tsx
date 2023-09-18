import React, { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import dynamic from 'next/dynamic';
const ProductCardComponent = dynamic(() => import('../../Product/product-section/product-card-app'));



interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: number;
}

interface trouserProductProps {
  maxItems?: number;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TrouserProductComponent: React.FC<trouserProductProps> = ({ maxItems }) => {
  const [ProductItems, setProductItems] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchProductItems = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/api/products/trouser');
        setProductItems(response.data);
      } catch (error) {
        console.error('Error fetching trousering items:', error);
      } finally {
        await sleep(1000);
        setLoading(false);
       
      }
    };

    fetchProductItems();
  }, []);

  const displayedItems = maxItems === Infinity ? ProductItems : ProductItems.slice(0, maxItems);

  return <ProductCardComponent ProductItems={displayedItems} loading={loading} />;
};

export default TrouserProductComponent;
