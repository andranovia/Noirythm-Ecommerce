import React, { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import ProductCard from '@/components/Product/ProductCard';




interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: string;
  promo_text: string;

}

interface PromoProductProps {
  maxItems?: number;
  className : string | {} | null;
  desc: boolean;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



const PromoProduct: React.FC<PromoProductProps> = ({ maxItems, className, desc }) => {
  const [ProductItems, setProductItems] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    const fetchProductItems = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/api/products/productPromo');
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

  const displayedItems = maxItems === Infinity ? ProductItems : ProductItems.slice(0, maxItems);

  return (
    
    <ProductCard ProductItems={displayedItems} loading={loading} className={className} desc={desc}/>);
};

export default PromoProduct;
