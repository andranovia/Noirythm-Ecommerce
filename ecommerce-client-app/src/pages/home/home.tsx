import ContainerCarouselCategComponent from '@/components/Home/category-carousel-container-section/category-carousel-app';
import HomeHeroComponent from '@/components/Home/hero-section/hero-app';
import ProductComponent from '@/components/Product/product-section/product-page-app';
import FooterComponent from '@/components/footer-section/footer-app';


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
