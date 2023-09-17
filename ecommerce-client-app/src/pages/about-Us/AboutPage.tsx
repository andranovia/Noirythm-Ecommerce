const AboutHeroComponent = dynamic(() => import('@/components/aboutUs-components/aboutUs-hero/aboutUs-hero-app'));
const NavbarComponent = dynamic(() => import('@/components/navbar-section/navbar-app'));
import dynamic from 'next/dynamic';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <div>
        <AboutHeroComponent/>
      </div>
    </>
  );
};
export default AboutPage;
