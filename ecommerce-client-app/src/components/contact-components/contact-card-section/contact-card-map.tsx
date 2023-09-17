import React from 'react';
import ContactCardItemComponent from './contact-cardItem-app';


interface ContactCardCategory {
  id?: string;
  image: string;
  title: string;
  description: string;
  label: string;
}

interface ContactCardProps {
  contactcategories: ContactCardCategory[];
}

const ContactCardMapComponent: React.FC<ContactCardProps> = ({ contactcategories }) => {
  

  return (
    <div className="bg-white mb-10 overflow-hidden">
      <div className="flex justify-center pt-10 px-20 ">
        <h1 className="text-2xl font-bold text-amber-700 sm:text-4xl">
          Why you need to contact us? -
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className='grid gap-[4vh] grid-cols-2 sm:grid-cols-3 sm:gap-[4rem] ">'>
          {contactcategories.map((category, index) => (
            <ContactCardItemComponent key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCardMapComponent;
