"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-12 overflow-hidden flex items-center flex-col w-full">
      <div className="max-w-[292px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 1xl:max-w-1xl 2xl:max-w-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-8 xl:mb-20 gap-8  relative w-full ">
        <div className="space-y-4  ">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-sm">
            Explicitly show what we are, showing to others, embracing equalifent
            subnaficant effect within times and location. Knowing what beside
            equality in our themes.
          </p>
          <p className="text-sm">Address: Toronto, USA, TR 10001</p>
          <p className="text-sm">Email: locals@noirythm.id</p>
        </div>

        <div className="space-y-4 relative md:left-10 lg:left-[5rem]">
          <h2 className="text-2xl font-semibold">Other Products</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Clothings
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Shoes
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Jackets
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Sweaters
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Newsletter</h2>
          <p className="text-sm">
            Subscribe to our newsletter and get the latest <br /> updates and
            promotions.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-900 text-white py-2 px-3 rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-black py-2 px-4 rounded-r-md transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[292px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 1xl:max-w-1xl 2xl:max-w-2xl w-full ">
        <div className="self-end text-sm">
          &copy; 2023 Noirythm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
