"use client";

import React from "react";
import Image from "next/image";
import Avatar from "@/components/user/avatar";
import ButtonPrimary from "@/components/button/button-primary";
import Link from "next/link";
import { useAuth } from "@/service/hooks/useAuth";
import ButtonSecondary from "@/components/button/button-secondary";
import UserInfo from "@/components/user/user-info";
import useWindowSize from "@/utils/useWindowSize";

const UserProfile: React.FC = () => {
  const { logoutAction, user } = useAuth();
  const windowSize = useWindowSize();
  const wWidth = windowSize.width ?? 0;

  return (
    <div className="max-w-screen min-h-screen">
      <div className="sm:grid grid-cols-3 justify-center">
        <div className="col-span-1 ">
          <div className="sm:hidden">
            <Link href={"/"}>
              <div className="flex justify-start items-center gap-2 my-5 mx-6">
                <Image
                  src={
                    "https://img.icons8.com/ios-filled/50/4D4D4D/long-arrow-left.png"
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
          <div className="m-10 mt-16  sm:mt-24 sm:mx-32 sm:shadow-md sm:p-4 rounded-md flex flex-col justify-between">
            <div className=" mb-10 sm:mb-4 justify-center flex flex-col sm:flex-row sm:justify-start gap-2 items-center sm:w-fit ">
              <div className="sm:w-10 w-20">
                <Avatar
                  imgSrc="https://img.icons8.com/ios-filled/50/4D4D4D/user-male-circle.png"
                  height={120}
                  width={120}
                />
              </div>
              {wWidth > 768 && <h2 className="font-semibold">{user?.name}</h2>}

              <div className="flex justify-center  mt-4 sm:hidden">
                <h2 className="font-bold text-sm text-gray-900">
                  Change Profile Picture
                </h2>
              </div>
            </div>

            {wWidth < 768 ? (
              <div className="flex justify-start">
                <div className="flex flex-col ">
                  <UserInfo />
                  <ButtonPrimary onClick={() => logoutAction()}>
                    Log out
                  </ButtonPrimary>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <div className="flex justify-start flex-col border-y-2 p-2 mb-[20rem]">
                    <div className="flex justify-start items-center mb-4 gap-2">
                      <Image
                        src={
                          "https://img.icons8.com/ios/50/4D4D4D/info--v1.png"
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
                            "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-wishlist-ecommerce-kiranshastry-lineal-kiranshastry.png"
                          }
                          height={20}
                          width={20}
                          alt=""
                        />
                        <h2>Wishlist</h2>
                      </button>
                    </div>
                  </div>
                  <ButtonPrimary onClick={() => logoutAction()}>
                    Logout
                  </ButtonPrimary>
                </div>
              </>
            )}
          </div>
        </div>
        {wWidth > 768 && (
          <>
            <div className="col-span-2 sm:mt-24  relative -left-24 flex flex-col justify-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={"https://img.icons8.com/ios/50/4D4D4D/info--v1.png"}
                  alt="user-profile"
                  height={20}
                  width={20}
                />
                <h1 className="font-bold ">{user?.name}</h1>
              </div>
              <div className="w-full shadow-md h-fit flex justify-start py-10  ">
                <div className="flex justify-start">
                  <div className="mx-10 shadow-md rounded-l">
                    <Image
                      src={
                        "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                      }
                      height={200}
                      width={300}
                      alt=""
                      className="p-4 rounded-md"
                    />
                    <div className="flex justify-center ml-4 ">
                      <ButtonSecondary>Change Profile Picture</ButtonSecondary>
                    </div>
                    <div className="mx-10 my-4 w-[12rem]">
                      <p className="text-[0.8rem] font-semibold text-gray-700">
                        Besar file: maksimum 10.000.000 bytes (10 Megabytes).
                        Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <UserInfo />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
