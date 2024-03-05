import ContactCardData from '@/components/Contact/ContactCardData';
import ContactHero from '@/components/Contact/ContactHero';
import ContactMap from '@/components/Contact/ContactMap';

import Layout from '@/components/Layout/LayoutDefault';

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
