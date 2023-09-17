import dynamic from 'next/dynamic';


const ContainerCarouselCategComponent = dynamic(() => import('@/components/Home/category-carousel-container-section/category-carousel-app'));
const HomeHeroComponent = dynamic(() => import('@/components/Home/hero-section/hero-app'));
const ProductComponent = dynamic(() => import('@/components/Product/product-section/product-page-app'));
const FooterComponent = dynamic(() => import('@/components/footer-section/footer-app'));

export default function Home() {
  return (
    <>
      <HomeHeroComponent />
      <ContainerCarouselCategComponent />
      <ProductComponent />
      <FooterComponent />
    </>
  );
}
