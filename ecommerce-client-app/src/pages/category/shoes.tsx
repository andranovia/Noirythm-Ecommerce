import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';

const ShoesProduct = dynamic(() => import('@/components/product/ShoesProduct'));

const CategoryClothPage: React.FC = () => {
  return (
    <Layout>
    <div className="min-h-screen min-w-screen flex items-center justify-center ">
  
        <div className="bg-white p-8 rounded-lg ">
          <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
          <p className="text-lg">
            Selected Category: <span className="text-blue-500">Shoes</span>
          </p>
          <ShoesProduct className={''} desc={true} />
        </div>
  
    </div>
    </Layout>
  );
};

export default CategoryClothPage;
