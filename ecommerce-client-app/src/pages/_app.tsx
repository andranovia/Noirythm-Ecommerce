import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RatingProvider } from '@/components/context/ratingContext';
import { ProductProvider } from '@/components/context/productContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <RatingProvider>
        <Component {...pageProps} />
      </RatingProvider>
    </ProductProvider>
  );
}
