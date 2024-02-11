import ContactCardData from '@/components/contact/contactCard/ContactCardData';
import ContactHero from '@/components/contact/contactHero/ContactHero';
import ContactMap from '@/components/contact/contactMap/ContactMap';

import Layout from '@/components/layout/LayoutDefault';

import React from 'react';

const ContactPage = () => {
  return (
    <>
      <Layout>
        <ContactHero />
        <ContactCardData />
        <ContactMap />
      </Layout>
    </>
  );
};

export default ContactPage;
