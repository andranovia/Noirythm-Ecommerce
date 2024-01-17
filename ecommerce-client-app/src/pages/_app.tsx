import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RatingProvider } from '@/components/context/ratingContext';


export default function App({ Component, pageProps }: AppProps) {
  return (


        <RatingProvider>
          <Component {...pageProps} />
        </RatingProvider>

    
  
  );
}
