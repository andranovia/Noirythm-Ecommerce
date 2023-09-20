import React from 'react';
import { useCart } from '@/components/context/cartContext';
import CartItemComponent from './cart-item-app';
const Cart = () => {
  const { state } = useCart();
  const { cart } = state;
  console.log(cart)
  return (

    <div className='my-20 shadow-ShadowCard px-4 pt-4'>
        {cart.map((item, index) => (
          <CartItemComponent key={index} item={item}/>
        ))}
    </div>
  );
};

export default Cart;
