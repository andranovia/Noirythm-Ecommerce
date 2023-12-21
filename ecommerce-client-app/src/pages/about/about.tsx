import Footer from '@/components/footer/Footer';
import dynamic from 'next/dynamic';
import React from 'react';

const AboutHero = dynamic(
  () => import('@/components/about/AboutHero')
);
const Navbar = dynamic(
  () => import('@/components/navbar/Navbar')
);

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Footer/>

    </>
  );
};
export default AboutPage;
