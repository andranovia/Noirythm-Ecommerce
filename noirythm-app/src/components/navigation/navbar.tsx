"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuth } from "../../hooks/useAuth";
import ButtonPrimary from "../button/button-primary";
import { useResize } from "../../hooks/useResize";
import NavbarTransitionMobile from "./navbar-transition-mobile";
import NavbarCategoryDropdown from "./navbar-category-dropdown";

const NavbarDropdown = dynamic(() => import("./navbar-dropdown"));
const NavbarSearch = dynamic(() => import("./navbar-search"));

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const { isMobile } = useResize();
  const { user } = useAuth();



  return (
    <div
      className="fixed z-40 top-0 left-0 right-0 flex overflow-hidden   "
  
    >
      <div className="flex flex-col w-64 flex-shrink-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          {isMobile && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 "
              aria-label="Open sidebar"
            >
              <Image
                src="https://img.icons8.com/ios-filled/50/menu--v6.png"
                width={20}
                height={20}
                alt=""
              />
            </button>
          )}
          <NavbarTransitionMobile
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {!isMobile && (
            <>
              <Link href="/">
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  style={{ zIndex: 50 }}
                >
                  <div className="flex-shrink-0 flex items-center px-4 py-3 mx-5">
                    <Image
                      className="h-10 w-auto cursor-pointer"
                      src="/img/logo-brand.png"
                      alt="Logo"
                      width={120}
                      height={120}
                    />
                    <h2 className="font-bold text-[1.5rem] text-black px-4">
                      Noirythm
                    </h2>
                  </div>
                </div>
              </Link>

              <NavbarDropdown
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            </>
          )}

          <div className="flex-1 px-4 flex justify-between items-center">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <label htmlFor="search_field" className="sr-only ">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <NavbarSearch />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center md:ml-6  ">
              <button
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                className="pl-3 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500 flex justify-center sm:mr-10"
              >
                {!isMobile && (
                  <>
                    <h2 className="font-semibold text-1xl text-black ">
                      Categories
                    </h2>
                  </>
                )}
                {!isMobile && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    name="category_logo"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 my-auto mx-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>
                )}
              </button>
              <NavbarCategoryDropdown
                isCategoryDropdownOpen={isCategoryDropdownOpen}
                setIsCategoryDropdownOpen={setIsCategoryDropdownOpen}
              />
            </div>
            <div className="flex justify-start items-center top-1 sm:top-0 w-fit mr-4 relative left-2 sm:-left-4 gap-4 sm:gap-6 ">
              <Link href="/cart" className={user ? "block" : "hidden"}>
                <button className="p-1 mb-2 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                  <Image
                    src="https://img.icons8.com/ios/50/shopping-cart--v1.png"
                    width={25}
                    height={20}
                    alt=""
                    className="w-6 h-6"
                  />
                </button>
              </Link>
              {user ? (
                <Link href="/user/">
                  <button className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                    <Image
                      src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                      width={25}
                      height={20}
                      alt=""
                      className="w-6 h-6"
                    />
                  </button>
                </Link>
              ) : (
                <>
                  <Link href={"/auth/login"}>
                    <ButtonPrimary>Login</ButtonPrimary>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
