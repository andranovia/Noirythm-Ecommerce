
import dynamic from 'next/dynamic';
const ProductInfoComponent = dynamic(() => import('@/components/Product/product-section/product-info-app'), {
  ssr: false, 
});



interface ProductPageProps{
    product : [];
    query: {
        id?: string; 
      };
}


export default function ProductPage({ product }: ProductPageProps) {

  return <ProductInfoComponent product={product} />;
}