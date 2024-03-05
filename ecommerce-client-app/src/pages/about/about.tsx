
import Layout from '@/components/Layout/LayoutDefault';
import dynamic from 'next/dynamic';
import React from 'react';

const AboutHero = dynamic(() => import('@/components/About/AboutHero'));

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
