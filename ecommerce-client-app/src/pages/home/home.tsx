import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CategoryContainer = dynamic(
  () => import('@/components/Home/Category/CategoryContainer')
);
const HomeHero = dynamic(() => import('@/components/Home/Hero/HomeHero'));
const Product = dynamic(
  () => import('@/components/Product/Product')
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <HomeHero />

        <CategoryContainer isMobile={isMobile} />
        <Product />
      </div>
      <Footer />
    </>
  );
}
