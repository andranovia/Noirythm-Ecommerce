import React, { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import ProductCardComponent from '../product-section/product-card-app';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: number;
}

interface ClothProductProps {
  maxItems?: number; 
}

const ClothProductComponent: React.FC<ClothProductProps> = ({ maxItems }) => {
  const [ProductItems, setProductItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchProductItems = async () => {
      try {
        const response = await axiosInstance.get('/api/products');
        setProductItems(response.data);
      } catch (error) {
        console.error('Error fetching clothing items:', error);
      }
    };

    fetchProductItems();
  }, []);


  const displayedItems = maxItems === Infinity ? ProductItems : ProductItems.slice(0, maxItems);

  return <ProductCardComponent ProductItems={displayedItems} />;
};

export default ClothProductComponent;
