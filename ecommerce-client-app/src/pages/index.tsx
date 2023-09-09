import ContainerCarouselCateg from '@/components/category-carousel-container-section/category-carousel-app';
import Navbar from '../components/navbar-section/navbar-app';
import HeroApp from '@/components/hero-section/hero-app';


import { Inter } from 'next/font/google';
import ProductPage from '@/components/product-section/product-page-app';
import FooterPage from '@/components/footer-section/footer-app';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroApp/>
      <ContainerCarouselCateg/>
      <ProductPage/>
      <FooterPage/>
      
    </>
  );
}
