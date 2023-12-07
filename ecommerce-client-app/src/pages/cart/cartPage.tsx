import dynamic from 'next/dynamic';
import React from 'react';
import Cart from '../../components/cart/Cart';
const Navbar = dynamic(() => import('@/components/Navbar/Navbar'));
import { useCart } from '@/components/hooks/useCart';

const CartPage = () => {
  const { userCart } = useCart();

  return (
    <div>
      <Navbar />
      <div className="flex justify-start relative top-36">
        <div className="">
          <div className="grid mx-10">
            <h1 className="text-2xl font-bold mb-15">Shopping Cart</h1>

            {userCart.length === 0 ? (
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
              <Cart />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
