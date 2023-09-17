import AboutHeroComponent from '@/components/aboutUs-components/aboutUs-hero/aboutUs-hero-app';
import NavbarComponent from '@/components/navbar-section/navbar-app';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <NavbarComponent />
      <div>
        <AboutHeroComponent/>
      </div>
    </div>
  );
};
export default AboutPage;
