import ContactCard from '@/components/contact-components/contact-card-section/contact-card-app';
import ContactMap from '@/components/contact-components/contact-form-section/contact-maps-app';

import ContactHeroApp from '@/components/contact-components/contact-hero-section/contact-hero-app';
import FooterPage from '@/components/footer-section/footer-app';
import Navbar from '@/components/navbar-section/navbar-app';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ContactHeroApp />
      <ContactCard />
      <ContactMap />
      <FooterPage />
    </div>
  );
};

export default ContactPage;
