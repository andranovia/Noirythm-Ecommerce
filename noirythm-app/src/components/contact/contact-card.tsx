import React from 'react';
import ContactCardItem from './contact-card-item';


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



const ContactCard: React.FC = () => {
  

  return (
    <div className="bg-white mb-10 overflow-hidden">
      <div className="flex justify-center pt-10 px-20 ">
        <h1 className="text-2xl font-bold text-gray-700 sm:text-4xl">
          Why you need to contact us? -
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className='grid gap-[4vh] grid-cols-2 sm:grid-cols-3 sm:gap-[4rem] ">'>
          {contactcategories.map((category, index) => (
            <ContactCardItem key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
