import React, { useEffect, useState } from 'react';
import { getUser } from '@/components/utils/auth';
import Image from 'next/image';
import Avatar from '@/components/User/Avatar';
import AvatarInfoBar from '@/components/User/AvatarInfoBar';

interface User {
  name: string;
  email: string;
  username: string;
  bio: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const maxLength = 10;

  const truncatedEmail =
    user && user.email
      ? user.email.length > maxLength
        ? `${user.email.substring(0, maxLength)}...`
        : user.email
      : 'Loading...';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          const userData: User = await getUser(accessToken);
          setUser(userData);
        } else {
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="max-w-screen min-h-screen">
      <div className="m-10">
        <div className=" mb-10">
          <Avatar imgSrc="https://img.icons8.com/ios-filled/50/4D4D4D/user-male-circle.png" />
          <div className="flex justify-center  mt-4">
            <h2 className="font-bold text-sm text-gray-900">
              Change Profile Picture
            </h2>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="flex flex-col ">
            <div className="flex justify-start items-center gap-2 mb-4">
              <h1 className=" font-bold text-gray-800">Profile info</h1>
              <Image
                src={'https://img.icons8.com/ios/50/4D4D4D/info--v1.png'}
                alt="user-profile"
                height={60}
                width={60}
                className="w-4"
              />
            </div>

            <div className="flex justify-start flex-col gap-6 w-[20rem] font-semibold  bg-gray-100 rounded-md p-4">
             <AvatarInfoBar user={user} infoType={user?.name} info={'name'}/> 
             <AvatarInfoBar user={user} infoType={user?.username} info={'username'}/> 
             <AvatarInfoBar user={user} infoType={user?.bio} info={'bio'}/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
