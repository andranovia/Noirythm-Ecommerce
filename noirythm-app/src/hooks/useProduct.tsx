import { getProducts, getProductsPromo } from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";


interface ProductItem {
  id: string;
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  product_type: string;
  promo_text: string;
}

export function useProduct() {
  const { data: products, isLoading } = useQuery<ProductItem[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  

  const { data: productsPromo } = useQuery({
    queryKey: ["productsPromo"],
    queryFn: () => getProductsPromo(),
  });


  return { products, isLoading, productsPromo };
}
