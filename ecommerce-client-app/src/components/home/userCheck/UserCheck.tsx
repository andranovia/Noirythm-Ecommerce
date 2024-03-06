import ButtonPrimary from '@/components/button/ButtonPrimary';
import Link from 'next/link';
import React from 'react';

const UserCheck = () => {
  return (
    <div className="max-w-full max-h-full m-5">
      <div className="flex justify-between ">
        <div>
          <h2 className="font-bold">Hi, Noires!</h2>
          <h3 className="text-sm w-[10rem] font-normal">Access all feature</h3>
        </div>
        <div>
          <Link href={'/auth/login'}>
            <ButtonPrimary>login</ButtonPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCheck;
