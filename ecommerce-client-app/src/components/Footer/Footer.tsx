'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ml-4 max-w-[30vh] sm:max-w-[200vh] relative sm:left-10 ">
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

        <div className="space-y-4 relative sm:left-[5rem]">
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

      <div className="mr-20 text-end text-sm">
        &copy; 2023 Noirythm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
