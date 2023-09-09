import { useRouter } from 'next/router';

interface ProductInfoProps {
  product: [];
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const router = useRouter();
  const { id, product_name } = router.query;

  return (
    <div>
      <h1>Product Info Page</h1>
      <p>ID: {id}</p>
      <p>Name: {product_name}</p>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
