import Image from 'next/image';
import React from 'react';

type AvatarType = {
    imgSrc: string
}


const Avatar = ({imgSrc}: AvatarType) => {
  return (
    <div className="flex justify-center rounded-full">
      <Image
        src={imgSrc}
        alt="user-profile"
        height={120}
        width={120}
        className="w-20"
      />
    </div>
  );
};
export default Avatar;
