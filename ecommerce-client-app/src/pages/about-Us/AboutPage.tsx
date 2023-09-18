import dynamic from 'next/dynamic';
import React from 'react';
const AboutHeroComponent = dynamic(
  () => import('@/components/aboutUs-components/aboutUs-hero/aboutUs-hero-app')
);
const NavbarComponent = dynamic(
  () => import('@/components/navbar-section/navbar-app')
);
const FooterComponent = dynamic(
  () => import('@/components/footer-section/footer-app')
);
const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <AboutHeroComponent />
      <FooterComponent/>

    </>
  );
};
export default AboutPage;
