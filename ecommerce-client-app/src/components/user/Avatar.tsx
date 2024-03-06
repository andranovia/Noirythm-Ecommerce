import Image from 'next/image';
import React from 'react';

type AvatarType = {
    imgSrc: string
    width? : any,
    height? : any,
}


const Avatar = ({imgSrc, width, height,}: AvatarType) => {
  return (
    <div className="flex justify-center rounded-full">
      <Image
        src={imgSrc}
        alt="user-profile"
        height={width}
        width={height}
        className="w-20"
      />
    </div>
  );
};
export default Avatar;
