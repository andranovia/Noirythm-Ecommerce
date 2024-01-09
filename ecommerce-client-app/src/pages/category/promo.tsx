import Layout from '@/components/layout/Layout';
import dynamic from 'next/dynamic';
import React from 'react';

const PromoProduct = dynamic(() => import('@/components/product/PromoProduct'));


const promo = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-screen flex items-center justify-center mt-20 ">
        <div className="bg-white p-8 rounded-lg ">
          <h1 className="text-2xl font-semibold mb-4"></h1>
          <p className="text-lg">
            Selected Category:{' '}
            <span className="text-blue-500">Promo Category</span>
          </p>
          <PromoProduct className={''} desc={true} />
        </div>
      </div>
    </Layout>
  );
};

export default promo;
