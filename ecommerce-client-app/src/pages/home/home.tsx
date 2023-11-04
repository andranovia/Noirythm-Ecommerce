import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';


const CategoryCarouselContainer = dynamic(() => import('@/components/Home/CategoryCarouselContainer/CategoryCarouselContainer'));
const HomeHero  = dynamic(() => import('@/components/Home/Hero/HomeHero'));
const Product = dynamic(() => import('@/components/Product/product-section/Product'));

export default function Home() {
  return (
    <>
      <HomeHero />
      <CategoryCarouselContainer />
      <Product/>
      <Footer />
    </>
  );
}
