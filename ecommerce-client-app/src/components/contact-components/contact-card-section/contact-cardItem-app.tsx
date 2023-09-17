import React from 'react';
import Image from 'next/image';

interface ContactCardCategory {
  title: string;
  description: string;
  image: string;
  label: string;
}

interface ContactItemProps {
  category: ContactCardCategory;
}

const ContactCardItemComponent: React.FC<ContactItemProps> = ({ category }) => {
  return (
    <div className="w-[8rem] h-[8rem] rounded-md border border-amber-950 sm:w-[15rem] sm:h-[12rem]">
      <div className="flex justify-center my-5 sm:my-10 ">
        <Image src={category.image} alt="" width={48} height={48} />
      </div>
      <div className="flex justify-center text-center font-semibold text-amber-900 mx-10">
        <h1>{category.label}</h1>
      </div>
    </div>
  );
};

export default ContactCardItemComponent;
