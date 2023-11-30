import React from 'react';
import Image from 'next/image';
import Avatar from '@/components/User/Avatar';
import AvatarInfoBar from '@/components/User/AvatarInfoBar';
import ButtonPrimary from '@/components/button/ButtonPrimary';
import Link from 'next/link';
import { useAuth } from '@/components/hooks/useAuth';
import Navbar from '@/components/Navbar/Navbar';
import ButtonSecondary from '@/components/button/ButtonSecondary';
import Footer from '@/components/Footer/Footer';
import UserInfoBarContainer from '@/components/User/UserInfoBarContainer';

const UserProfile: React.FC = () => {
  const { logoutAction, user } = useAuth();

  const maxLength = 10;

  const truncatedEmail =
    user && user.email
      ? user.email.length > maxLength
        ? `${user.email.substring(0, maxLength)}...`
        : user.email
      : 'Loading...';

  const [isMobile, setIsMobile] = React.useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="max-w-screen min-h-screen">
      {!isMobile && <Navbar />}
      <div className="sm:grid grid-cols-3 justify-center">
        <div className="col-span-1 ">
          <div className="sm:hidden">
            <Link href={'/'}>
              <div className="flex justify-start items-center gap-2 my-5 mx-6">
                <Image
                  src={
                    'https://img.icons8.com/ios-filled/50/4D4D4D/long-arrow-left.png'
                  }
                  alt="user-profile"
                  height={60}
                  width={60}
                  className="w-6 mt-1"
                />
                <h1 className=" font-bold text-[1.2rem] text-gray-700">
                  change profile
                </h1>
              </div>
            </Link>
          </div>
          <div className="m-10 mt-16  sm:mt-24 sm:mx-32 sm:shadow-Aesthetic sm:p-4 rounded-md flex flex-col justify-between">
            <div className=" mb-10 sm:mb-4 justify-center flex flex-col sm:flex-row sm:justify-start gap-2 items-center sm:w-fit ">
              <div className="sm:w-10 w-20">
                <Avatar imgSrc="https://img.icons8.com/ios-filled/50/4D4D4D/user-male-circle.png" />
              </div>
              {!isMobile && <h2 className="font-semibold">{user?.name}</h2>}

              <div className="flex justify-center  mt-4 sm:hidden">
                <h2 className="font-bold text-sm text-gray-900">
                  Change Profile Picture
                </h2>
              </div>
            </div>

            {isMobile ? (
              <div className="flex justify-start">
                <div className="flex flex-col ">
                  <UserInfoBarContainer />
                  <ButtonPrimary onClick={logoutAction}>Log out</ButtonPrimary>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <div className="flex justify-start flex-col border-y-2 p-2 mb-[20rem]">
                    <div className="flex justify-start items-center mb-4 gap-2">
                      <Image
                        src={
                          'https://img.icons8.com/ios/50/4D4D4D/info--v1.png'
                        }
                        alt="user-profile"
                        height={20}
                        width={20}
                      />
                      <h1 className="font-bold ">Your Profile</h1>
                    </div>
                    <div className="flex flex-col gap-2 mb-4 font-semibold">
                      <button className="flex justify-start mx-6 gap-2 ">
                        <Image
                          src="https://img.icons8.com/ios/50/shopping-cart.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                        <h2>Cart</h2>
                      </button>
                      <button className="flex justify-start mx-6 gap-2 ">
                        <Image
                          src={
                            'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-wishlist-ecommerce-kiranshastry-lineal-kiranshastry.png'
                          }
                          height={20}
                          width={20}
                          alt=""
                        />
                        <h2>Wishlist</h2>
                      </button>
                    </div>
                  </div>
                  <ButtonPrimary>Logout</ButtonPrimary>
                </div>
              </>
            )}
          </div>
        </div>
        {!isMobile && (
          <>
            <div className="col-span-2 sm:mt-24  relative -left-24 flex flex-col justify-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={'https://img.icons8.com/ios/50/4D4D4D/info--v1.png'}
                  alt="user-profile"
                  height={20}
                  width={20}
                />
                <h1 className="font-bold ">{user?.name}</h1>
              </div>
              <div className="w-full shadow-Aesthetic h-[29rem] flex justify-start py-10  ">
                <div className="flex justify-start">
                  <div className="mx-10 shadow-Aesthetic rounded-l">
                    <Image
                      src={
                        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'
                      }
                      height={200}
                      width={300}
                      alt=""
                      className="p-4 rounded-md"
                    />
                    <div className="flex justify-center ml-4 ">
                      <ButtonSecondary>Change Profile Picture</ButtonSecondary>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <UserInfoBarContainer />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!isMobile && <Footer />}
    </div>
  );
};

export default UserProfile;
