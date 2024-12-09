import {
  getProducts,
  getProductsPromo,
  getProductsSearch,
} from "@/service/methods/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface ProductItem {
  id: string;
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  product_type: string;
  promo_text: string;
  average_rating: number;
}

export function useProduct(searchQuery?: string) {
  const [isSearchResultsVisible, setSearchResultsVisible] = useState(false);

  const { data: products, isLoading: isProductsLoading } = useQuery<ProductItem[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const { data: productsPromo } = useQuery({
    queryKey: ["productsPromo"],
    queryFn: () => getProductsPromo(),
  });

  const { data: productsSearch } = useQuery({
    queryKey: ["productsSearch", searchQuery || ""],
    queryFn: () => getProductsSearch(searchQuery, setSearchResultsVisible),
  });

  return {
    products,
    isProductsLoading,
    productsPromo,
    productsSearch,
    isSearchResultsVisible,
  };
}
