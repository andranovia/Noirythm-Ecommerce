import React from 'react';
import { useRouter } from 'next/router';
import ClothProductComponent from '@/components/Home/cloth-product-section/cloth-product-app';
import NavbarComponent from '@/components/navbar-section/navbar-app';

const CategoryPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center sm:w-screen">
      <NavbarComponent/>
      <div className="bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
        <p className="text-lg">
          Selected Category: <span className="text-blue-500">Clothing</span>
        </p>
       <ClothProductComponent/>
      </div>
    </div>
  );
};

export default CategoryPage;
