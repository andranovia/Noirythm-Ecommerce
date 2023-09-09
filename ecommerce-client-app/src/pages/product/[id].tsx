
import { useRouter } from 'next/router';
import axiosInstance from '@/utils/api';
import ProductInfo from '@/components/product-section/product-info-app';


interface ProductPageProps{
    product : [];
    query: {
        id?: string; 
      };
}


export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();
  const { id, product_name } = router.query;

  return <ProductInfo product={product} />;
}

export async function getServerSideProps({ query }: ProductPageProps) {
  try {
    const response = await axiosInstance.get(`/api/products/${query.id}`);
    const product = response.data;

    return {
      props: { product },
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      props: {},
    };
  }
}
