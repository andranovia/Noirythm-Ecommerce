import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';
import React from 'react';

const AboutHero = dynamic(
  () => import('@/components/AboutUs/AboutUsHero/AboutHero')
);
const Navbar = dynamic(
  () => import('@/components/Navbar/Navbar')
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
