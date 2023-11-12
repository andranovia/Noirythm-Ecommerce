import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '@/components/context/cartContext';
import { RatingProvider } from '@/components/context/ratingContext';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RatingProvider>
          <Component {...pageProps} />
        </RatingProvider>
      </CartProvider>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
