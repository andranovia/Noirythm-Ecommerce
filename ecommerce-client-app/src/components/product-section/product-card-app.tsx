import React, { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import ProductItemCard from './product-item-app';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: string;
}

const ProductCardComponent: React.FC = () => {
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

  return (
    <div className="flex justify-center">
      <div className="grid gap-[3vh] grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-10">
        {ProductItems.map((item, index) => (
          <ProductItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardComponent;
