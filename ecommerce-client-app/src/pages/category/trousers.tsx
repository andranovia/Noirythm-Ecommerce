import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout/LayoutDefault';

const ProductData = dynamic(() => import('@/components/product/ProductData'));

const CategoryTrouserPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg ">
          <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
          <p className="text-lg">
            Selected Category: <span className="text-blue-500">trousers</span>
          </p>
          <ProductData className={''} desc={true} productTypeFilter="trouser" />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryTrouserPage;
