import React, { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import ProductCard from '../ProductCard';




interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: string;
  promo_text:string;
}

interface trouserProductProps {
  maxItems?: number;
  desc: boolean;
  className : string | {} | null;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TrouserProduct: React.FC<trouserProductProps> = ({ maxItems, desc, className }) => {
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

  return <ProductCard ProductItems={displayedItems} loading={loading} className={className}  desc={desc}/>;
};

export default TrouserProduct;
