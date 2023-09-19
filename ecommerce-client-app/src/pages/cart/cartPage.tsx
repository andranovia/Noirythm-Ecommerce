import dynamic from 'next/dynamic';
import React from 'react';
const Cart = dynamic(() => import('./cartComponent'));
const NavbarComponent = dynamic(
  () => import('@/components/navbar-section/navbar-app')
);

const CartPage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="flex justify-start relative top-36">
        <div className="">
          <div className="grid mx-10">
            <h1 className='text-2xl font-bold mb-15'>Shopping Cart</h1>
            <div className='my-10 rounded-md mx-auto shadow-md p-10 '>
            <Cart/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
