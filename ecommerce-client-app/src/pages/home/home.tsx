import Footer from '@/components/Footer/Footer';
import UserCheck from '@/components/Home/UserCheck/UserCheck';
import Product from '@/components/Product/Product';
import { useAuth } from '@/components/hooks/useAuth';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CategoryContainer = dynamic(
  () => import('@/components/Home/Category/CategoryContainer')
);
const HomeHero = dynamic(() => import('@/components/Home/Hero/HomeHero'));

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { user } = useAuth();

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
        {isMobile && !user && <UserCheck />}

        <CategoryContainer isMobile={isMobile} />
        <Product />
      </div>
      <Footer />
    </>
  );
}
