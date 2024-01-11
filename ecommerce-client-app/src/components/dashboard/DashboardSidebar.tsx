import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ApplicationLogo from '../logo/AplicationLogo';

const navbarData = [

  {
    id: 'E-Commerce',
    name: 'E-Commerce',
    icon: 'https://img.icons8.com/ios/50/shop.png',
  },
  {
    id: 'Calendar',
    name: 'Calendar',
    icon: 'https://img.icons8.com/hieroglyphs/32/experimental-calendar-hieroglyphs.png',
  },
];

const DashboardSidebar = () => {
  return (
    <>
      <div className="flex justify-center flex-col m-6">
        <div className="flex  justify-start items-center ">
          <ApplicationLogo className="h-10 w-12" />
          <h2 className="font-bold text-2xl text-black px-4">Noirythm</h2>
        </div>
        <div className="mt-10 text-gray-600">
          <h2 className="font-bold text-md  px-2">Pages</h2>

          <div className="flex justify-start gap-4 my-4 rounded-full bg-white p-2">
            <Image
              src={'https://img.icons8.com/ios/50/dashboard.png'}
              alt="icon"
              height={20}
              width={30}
            />
            <p className="text-lg font-bold text-black">{'Dashboard'}</p>
          </div>

          {navbarData.map((data, index) => (
            <React.Fragment key={index}>
              <Link href={data.id}>
                <div className="flex justify-start gap-4 my-4 p-2">
                  <Image src={data.icon} alt="icon" height={20} width={30} />
                  <p className="text-lg font-medium ">{data.name}</p>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
