import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import axiosInstance from '@/utils/api';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarResult = dynamic(() => import('./NavbarResult'))
interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: number;
  promo_text: string;
}

const NavbarSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<(ProductItem | never)[]>([]); 
  const [isSearchResultsVisible, setSearchResultsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const maxResultsToShow = 4;

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/search?query=${searchQuery}`
      );

  

      if (Array.isArray(response.data)) {
        setSearchResults(response.data.slice(0, maxResultsToShow));
        setSearchResultsVisible(true);
      } else {
        console.error('Combined product data is not an array:', response.data)
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
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
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
      <div ref={inputRef} className="flex justify-center mx-auto mt-2  ">
        <div className="absolute inset-y-0 left-2 flex results-center pointer-events-none">
          <Image
            src="https://img.icons8.com/ios/50/search--v1.png"
            width={20}
            height={10}
            alt=""
            className='w-6 h-6 relative top-4'
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
        <div className="fixed bg-white w-full h-[32rem] left-0 right-0 sm:w-[50rem] rounded-md sm:left-[18%] sm:h-fit ">
          {searchResults.map((result) => (
            <Link
              href={{
                pathname: `/product/${result.id}`,
                query: {
                  product_name: result.product_name,
                  product_price: result.product_price,
                  product_image: result.product_image,
                  product_description: result.product_description,
                },
              }}
              key={result.id}
            >
              <NavbarResult key={result.id} result={result} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
