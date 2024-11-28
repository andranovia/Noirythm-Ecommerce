import Image from "next/image";
import React from "react";

import { useAuth } from "../../service/hooks/useAuth";
import AvatarInfoBar from "./avatar-info";

const UserInfo = () => {
  const { user } = useAuth();
  const maxLength = 10;

  const truncatedEmail =
    user && user.email
      ? user.email.length > maxLength
        ? `${user.email.substring(0, maxLength)}...`
        : user.email
      : "Loading...";

  return (
    <>
      <div className="flex justify-start items-center gap-2 mb-4">
        <h1 className=" font-bold text-gray-800">Profile info</h1>
        <Image
          src={"https://img.icons8.com/ios/50/4D4D4D/info--v1.png"}
          alt="user-profile"
          height={60}
          width={60}
          className="w-4"
        />
      </div>

      <div className="flex justify-start flex-col gap-6 w-[20rem] font-semibold  bg-gray-100 sm:bg-white rounded-md p-4">
        <AvatarInfoBar user={user} infoType={user?.name} info={"name"} />
        <AvatarInfoBar
          user={user}
          infoType={user?.username}
          info={"username"}
        />
        <AvatarInfoBar user={user} infoType={user?.bio} info={"bio"} />
      </div>

      <div className="flex justify-start items-center gap-2 mb-4 mt-10">
        <h1 className=" font-bold text-gray-800">Account info</h1>
        <Image
          src={"https://img.icons8.com/ios/50/4D4D4D/info--v1.png"}
          alt="user-profile"
          height={60}
          width={60}
          className="w-4"
        />
      </div>
      <div className="flex mb-8 justify-start flex-col gap-6 w-[20rem] font-semibold  bg-gray-100 sm:bg-white rounded-md p-4">
        <AvatarInfoBar user={user} infoType={user?.id} info={"user id"} />
        <AvatarInfoBar user={user} infoType={truncatedEmail} info={"email"} />
      </div>
    </>
  );
};

export default UserInfo;
