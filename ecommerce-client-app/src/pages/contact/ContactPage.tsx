import ContactCardComponent from '@/components/contact-components/contact-card-section/contact-card-app';
import ContactMapComponent from '@/components/contact-components/contact-form-section/contact-maps-app';
import ContactHeroComponent from '@/components/contact-components/contact-hero-section/contact-hero-app';
import FooterComponent from '@/components/footer-section/footer-app';
import NavbarComponent from '@/components/navbar-section/navbar-app';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden">
      <NavbarComponent />
      <ContactHeroComponent />
      <ContactCardComponent />
      <ContactMapComponent />
      <FooterComponent />
    </div>
  );
};

export default ContactPage;
