
import Layout from '@/components/layout/LayoutDefault';
import dynamic from 'next/dynamic';
import React from 'react';

const AboutHero = dynamic(() => import('@/components/about/AboutHero'));

const AboutPage = () => {
  return (
    <>
      <Layout>
        <AboutHero />
      </Layout>
    </>
  );
};
export default AboutPage;
