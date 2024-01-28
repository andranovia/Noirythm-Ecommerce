import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RatingProvider } from '@/contexts/ratingContext';
import { ProductProvider } from '@/contexts/productContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <RatingProvider>
        <Component {...pageProps} />
      </RatingProvider>
    </ProductProvider>
  );
}
