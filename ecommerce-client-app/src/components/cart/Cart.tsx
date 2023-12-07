import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {

  const { userCart } = useCart();
console.log(userCart)
  return (

    <div className='my-20  px-4 pt-4'>
        {userCart.map((item, index) => (
          <CartItem key={index} item={item}/>
        ))}
    </div>
  );
};

export default Cart;
