import React, { useState, useEffect } from 'react';
import axiosInstance from '@/utils/api';
import ProductItemCard from './product-item-app';
import Link from 'next/link';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: string;
  id: number;
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
          <Link
            href={{
              pathname: `/product/${item.id}`,
              query: {
                product_name: item.product_name,
              },
            }}
        
            key={item.id}
          >
        
            <ProductItemCard key={index} item={item} />
          </Link>
        ))}
       
      </div>
    </div>
  );
};

export default ProductCardComponent;
