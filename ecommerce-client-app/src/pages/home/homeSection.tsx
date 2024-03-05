import UserCheck from '@/components/Home/UserCheck/UserCheck';
import Product from '@/components/Product/Product';
import { useAuth } from '@/hooks/useAuth';
import { useResize } from '@/hooks/useResize';
import Layout from '../../components/Layout/LayoutDefault';

import CategoryCarouselContainer from '@/components/Home/Category/CategoryContainer';
import LayoutDefault from '../../components/Layout/LayoutDefault';
import HomeHero from '@/components/Home/HomeHero/HomeHero';




export default function HomeSection() {
  const { isMobile } = useResize();
  const { user } = useAuth();

  return (
    <>
      <LayoutDefault>
        <div className="bg-gray-100">
          <HomeHero />
          {isMobile && !user && <UserCheck />}

          <CategoryCarouselContainer />
          <Product />
        </div>
      </LayoutDefault>
    </>
  );
}
