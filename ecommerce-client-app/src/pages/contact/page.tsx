import ContactCardData from '@/components/contact/ContactCardData';
import ContactHero from '@/components/contact/ContactHero';
import ContactMap from '@/components/contact/ContactMap';

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
