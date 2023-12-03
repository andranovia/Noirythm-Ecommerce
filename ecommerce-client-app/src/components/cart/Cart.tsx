import React from 'react';
import { useCart } from '@/components/context/cartContext';
import CartItem from './CartItem';
import { useAuth } from '../hooks/useAuth';
const Cart = () => {
  const { state } = useCart();
  const { user } = useAuth();
  const { cart } = state;

  const userCart = cart[user?.id] || [];

  return (

    <div className='my-20  px-4 pt-4'>
        {userCart.map((item, index) => (
          <CartItem key={index} item={item}/>
        ))}
    </div>
  );
};

export default Cart;
