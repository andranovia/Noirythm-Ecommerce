import ContactCardData from '@/components/contact/contactCard/ContactCardData';
import ContactHero from '@/components/contact/contactHero/ContactHero';
import ContactMap from '@/components/contact/contactMap/ContactMap';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
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
