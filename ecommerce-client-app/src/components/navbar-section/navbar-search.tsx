import React, { useState, useEffect, useRef } from 'react';

import axiosInstance from '@/utils/api'; // Import your Axios instance
import Image from 'next/image';
const NavbarSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchResultsVisible, setSearchResultsVisible] = useState(false);
  const inputRef = useRef(null);
  const maxResultsToShow = 6;

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/search?query=${searchQuery}`
      );
      const { clothProducts, shoesProducts, trousersProducts } = response.data;

      const allProducts = [
        ...clothProducts,
        ...shoesProducts,
        ...trousersProducts,
      ];

      if (Array.isArray(allProducts)) {
        setSearchResults(allProducts.slice(0, maxResultsToShow));
        setSearchResultsVisible(true);
      } else {
        console.error('Combined product data is not an array:', allProducts);
        setSearchResults([]);
        setSearchResultsVisible(false);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
      setSearchResultsVisible(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSearchResultsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    } else {
      setSearchResults([]);
      setSearchResultsVisible(false);
    }
  }, [searchQuery]);
  return (
    <div className="">
      <div ref={inputRef} className="flex justify-center mx-auto my-3  ">
        <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
          <Image
            src="https://img.icons8.com/ios/50/search--v1.png"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <input
          type="text"
          className="border-gray-500 border-2 p-2 w-full h-full pl-10 pr-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 bg-white sm:text-sm"
          placeholder="Summer cloth..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {isSearchResultsVisible && (
        <ul className="fixed">
          {searchResults.map((result) => (
            <li key={result.id}>{result.product_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarSearch;
