const ContactCardComponentSection= dynamic(() => import('@/components/contact-components/contact-card-section//contact-card-section'));
const ContactMapComponent = dynamic(() => import('@/components/contact-components/contact-form-section/contact-maps-app'));
const ContactHeroComponent = dynamic(() => import('@/components/contact-components/contact-hero-section/contact-hero-app'));
const FooterComponent = dynamic(() => import('@/components/footer-section/footer-app'));
const NavbarComponent = dynamic(() => import('@/components/navbar-section/navbar-app'));
import dynamic from 'next/dynamic';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <NavbarComponent />
      <ContactHeroComponent />
      <ContactCardComponentSection />
      <ContactMapComponent />
      <FooterComponent />
    </>
  );
};

export default ContactPage;
