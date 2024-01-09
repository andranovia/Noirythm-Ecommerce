import UserCheck from '@/components/home/userCheck/UserCheck';
import Product from '@/components/product/Product';
import { useAuth } from '@/components/hooks/useAuth';
import { useResize } from '@/components/hooks/useResize';
import dynamic from 'next/dynamic';
import Layout from '../../components/layout/Layout';


const CategoryContainer = dynamic(
  () => import('@/components/home/category/CategoryContainer')
);
const HomeHero = dynamic(() => import('@/components/home/homeHero/HomeHero'));

export default function Home() {
  const {isMobile} = useResize(); 
  const { user } = useAuth();

  return (
    <>
    <Layout>

  
      <div className="bg-gray-100">
        <HomeHero />
        {isMobile && !user && <UserCheck />}

        <CategoryContainer />
        <Product  />
      </div>
    
      </Layout>
    </>
  );
}
