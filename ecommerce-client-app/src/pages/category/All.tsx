import dynamic from 'next/dynamic';
import React from 'react';
import Layout from '@/components/layout/Layout';

const ClothProduct = dynamic(() => import('@/components/product/ClothProduct'));
const ShoesProduct = dynamic(() => import('@/components/product/ShoesProduct'));
const TrouserProduct = dynamic(
  () => import('@/components/product/TrouserProduct')
);

const AllCategory: React.FC = () => {
  
  return (
    <Layout>
    <div className="min-h-screen min-w-screen flex items-center justify-center ">

        <div className="bg-white p-8 rounded-lg ">
          <h1 className="text-2xl font-semibold mb-4">Category Page</h1>
          <p className="text-lg">
            Selected Category:{' '}
            <span className="text-blue-500">All Category</span>
          </p>
          <ClothProduct className={''} desc={true} />
          <ShoesProduct className={''} desc={true} />
          <TrouserProduct className={''} desc={true} />
        </div>
   
    </div>
    </Layout>
  );
};
export default AllCategory;
