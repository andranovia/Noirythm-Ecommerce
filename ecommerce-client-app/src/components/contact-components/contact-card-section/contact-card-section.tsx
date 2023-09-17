import React from 'react';
import ContactCardMapComponent from './contact-card-map';

const ContactCardComponentSection = () => {
  const contactcategories = [
    {
      image: 'https://img.icons8.com/cotton/100/pay.png',
      title: 'Payments protection',
      description: 'Where you can find all the things',
      label: 'Payment Services',
    },
    {
      image: 'https://img.icons8.com/ios/50/delivery--v1.png',
      title: 'Delivery problem',
      description: 'Where you can find all the things',
      label: 'Delivery problem',
    },
    {
      image: 'https://img.icons8.com/pastel-glyph/64/user-settings.png',
      title: 'Manage your accounts',
      description: 'Where you can find all the things',
      label: 'Manage accounts',
    },
    {
      image: 'https://img.icons8.com/ios/50/refund.png',
      title: 'Manage your accounts',
      description: 'Where you can find all the things',
      label: 'Refund payment',
    },
    {
      image: 'https://img.icons8.com/ios/50/discount--v1.png',
      title: 'Payments protection',
      description: 'Where you can find all the things',
      label: 'Product discount',
    },
    {
      image: 'https://img.icons8.com/ios/50/connection-status-off.png',
      title: 'Payments protection',
      description: 'Where you can find all the things',
      label: 'More..',
    },
  ];
  return <ContactCardMapComponent contactcategories={contactcategories} />;
};
export default ContactCardComponentSection;
