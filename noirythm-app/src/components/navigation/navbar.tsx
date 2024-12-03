"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../service/hooks/useAuth";
import useWindowSize from "../../utils/useWindowSize";
import NavbarTransitionMobile from "./navbar-transition-mobile";
import NavbarSearch from "./navbar-search";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const windowSize = useWindowSize();
  const wWidth = windowSize.width ?? 0;
  const { user } = useAuth();

  return (
    <div className="fixed z-40 top-0 left-0 right-0 flex overflow-hidden   ">
      <div className="w-full overflow-hidden bg-white flex justify-center items-center shadow">
        <div className="relative z-10 flex justify-between items-center h-16 bg-white max-w-[292px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 1xl:max-w-1xl 2xl:max-w-2xl w-full">
          <div className="flex gap-2 items-center ">
            {wWidth < 768 && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Image
                  src="https://img.icons8.com/fluency-systems-regular/50/menu.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            )}

            <NavbarSearch />
          </div>
          <NavbarTransitionMobile
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {wWidth > 768 && (
            <>
              <Link href="/">
                <div className="relative" style={{ zIndex: 30 }}>
                  <div className="justify-center flex items-center ">
                    <h2 className="font-normal text-2xl text-black px-4">
                      NOIRYTHM
                    </h2>
                  </div>
                </div>
              </Link>
            </>
          )}

          <div className="flex justify-start items-center w-fit  relative gap-2 md:gap-4">
            <Link href={user ? "/user/" : "/auth/login"}>
              <button className=" text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                <Image
                  src="https://img.icons8.com/fluency-systems-regular/50/guest-male.png"
                  width={40}
                  height={40}
                  alt=""
                  className="w-6 h-6 p-0.5"
                />
              </button>
            </Link>
            <Link href={user ? "/cart" : "/auth/login"}>
              <button className=" text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                <Image
                  src="https://img.icons8.com/fluency-systems-regular/50/shopping-cart--v1.png"
                  width={40}
                  height={40}
                  alt=""
                  className="w-6 h-6 p-0.5"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
