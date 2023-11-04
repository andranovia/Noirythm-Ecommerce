import ContactCardData from '@/components/Contact/ContactCard/ContactCardData';
import ContactHero from '@/components/Contact/ContactHero/ContactHero';
import ContactMap from '@/components/Contact/ContactMap/ContactMap';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <ContactHero/>
      <ContactCardData/>
      <ContactMap />
      <Footer/>
    </>
  );
};

export default ContactPage;
