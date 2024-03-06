import UserCheck from '@/components/home/userCheck/UserCheck';
import Product from '@/components/product/Product';
import { useAuth } from '@/hooks/useAuth';
import { useResize } from '@/hooks/useResize';
import Layout from '../../components/layout/LayoutDefault';

import CategoryCarouselContainer from '@/components/home/category/CategoryContainer';
import LayoutDefault from '../../components/layout/LayoutDefault';
import HomeHero from '@/components/home/hero/HomeHero';

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
