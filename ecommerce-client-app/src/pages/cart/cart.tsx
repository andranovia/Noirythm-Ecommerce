import dynamic from 'next/dynamic';
import React from 'react';
import Cart from '../../components/cart/Cart';
const Navbar = dynamic(() => import('@/components/Navbar/NavbarSection'));
import { useCart } from '@/hooks/useCart';
import Layout from '@/components/layout/LayoutDefault';

const CartPage = () => {
  const { userCart } = useCart();

  return (
    <>
      <Layout>
      <div className="flex justify-center relative top-36 w-full sm:justify-start ">
        <div className="sm:ml-20">
          <div className="grid">
            <h1 className="text-2xl font-bold mb-15">Shopping Cart</h1>

            {userCart.cartProducts.length === 0 ? (
              <div className="my-10 rounded-md mx-auto shadow-ShadowCard p-10 ">
                <div>
                  <p className="font-semibold text-2xl">
                    Your cart is empty! please add product to your shopping
                    cart.
                  </p>
                  <button className="bg-gray-800 rounded-lg flex h-15 w-fit h- my-8 p-2 flex-col justify-center">
                    <h2 className="font-semibold text-white">
                      Click here to see cool products
                    </h2>
                  </button>
                </div>
              </div>
            ) : (
              <div className='flex justify-center'>
              <Cart />
              </div>
            )}
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default CartPage;
