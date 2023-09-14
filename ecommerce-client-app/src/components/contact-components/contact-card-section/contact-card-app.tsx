import React from 'react';
import ContactCardItem from './contact-cardItem-app';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdManageAccounts } from 'react-icons/md';
import { RiRefund2Line } from 'react-icons/ri';
import { CiDiscount1 } from 'react-icons/ci';
import { MdWindow } from 'react-icons/md';

interface ContactCardCategory {
  id?: string;
  image: JSX.Element;
  title: string;
  description: string;
  label: string;
}

interface ContactCardProps {
  contactcategories: ContactCardCategory[];
}

const ContactCard: React.FC<ContactCardProps> = () => {
  const contactcategories = [
    {
      image: <RiSecurePaymentLine />,
      title: 'Payments protection',
      description: 'Where you can find all the things',
      label: 'Payment Services',
    },
    {
      image: <TbTruckDelivery />,
      title: 'Delivery problem',
      description: 'Where you can find all the things',
      label: 'Delivery problem',
    },
    {
      image: <MdManageAccounts />,
      title: 'Manage your accounts',
      description: 'Where you can find all the things',
      label: 'Manage accounts',
    },
    {
      image: <RiRefund2Line />,
      title: 'Manage your accounts',
      description: 'Where you can find all the things',
      label: 'Refund payment',
    },
    {
      image: <CiDiscount1 />,
      title: 'Payments protection',
      description: 'Where you can find all the things',
      label: 'Product discount',
    },
    {
        image: <MdWindow/>,
        title: 'Payments protection',
        description: 'Where you can find all the things',
        label: 'More..',
      },
  ];

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
            <ContactCardItem key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
