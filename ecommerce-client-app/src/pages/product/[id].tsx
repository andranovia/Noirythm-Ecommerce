
import { useRouter } from 'next/router';

import ProductInfo from '@/components/Product/product-section/product-info-app';


interface ProductPageProps{
    product : [];
    query: {
        id?: string; 
      };
}


export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();
  const { id, product_name, product_image, product_description } = router.query;

  return <ProductInfo product={product} />;
}