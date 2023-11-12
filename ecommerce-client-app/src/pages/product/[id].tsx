
import dynamic from 'next/dynamic';
const ProductInfo = dynamic(() => import('@/components/Product/ProductInfo'), {
  ssr: false, 
});



interface ProductPageProps {
  product: {
    id: string;
    product_name: string;
    product_image: string;
    product_price: number;
    product_description: string;
  };
  query: {
    id?: string;
  };
}


export default function ProductPage({ product }: ProductPageProps) {



  return <ProductInfo product={product} />;
}