import Image from 'next/image';
import React from 'react';


type AvatarInfoBarType = {
    user: any
    info: string;
    infoType: any;
}

const AvatarInfoBar = ({ user, infoType, info }: AvatarInfoBarType) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start">
        <h1 className=" text-gray-600 w-20">{info}</h1>
        <span className={infoType ? `text-gray-800 font-bold mx-8`: `text-gray-500  mx-8`}>
          {user ? (infoType ? infoType : 'write your info') : 'Loading...'}
        </span>
      </div>

      <div>
        <Image
          src={'https://img.icons8.com/ios-glyphs/30/4D4D4D/forward.png'}
          alt="user-profile"
          height={60}
          width={60}
          className="w-4"
        />
      </div>
    </div>
  );
};

export default AvatarInfoBar