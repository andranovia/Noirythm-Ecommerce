import axiosInstance from '@/utils/api';
import React, { useEffect, useState } from 'react';


type ProductItem = {
    product_name: string;
    product_image: string;
    product_price: number;
    product_description: string;
    id: number;
    promo_text: string;
  }
  

const useSearch = () => {
    
  const maxResultsToShow = 4;
  const [searchResults, setSearchResults] = useState<(ProductItem | never)[]>(
    []
  );
  const [isSearchResultsVisible, setSearchResultsVisible] = useState(false);


  const handleSearch = async (searchQuery: string) => {
    try {
      const response = await axiosInstance.get(
        `/api/search?query=${searchQuery}`
      );

      if (Array.isArray(response.data)) {
        setSearchResults(response.data.slice(0, maxResultsToShow));
        setSearchResultsVisible(true);
      } else {
        console.error('Combined product data is not an array:', response.data);
        setSearchResults([]);
        setSearchResultsVisible(false);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
      setSearchResultsVisible(false);
    }
  };


  



  return {handleSearch, isSearchResultsVisible, searchResults, setSearchResultsVisible};
};

export default useSearch;
