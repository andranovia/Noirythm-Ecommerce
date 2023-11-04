import React from 'react';
import { useCart } from '@/components/context/cartContext';
import CartItem from './CartItem';
const Cart = () => {
  const { state } = useCart();
  const { cart } = state;
  console.log(cart)
  return (

    <div className='my-20  px-4 pt-4'>
        {cart.map((item, index) => (
          <CartItem key={index} item={item}/>
        ))}
    </div>
  );
};

export default Cart;
