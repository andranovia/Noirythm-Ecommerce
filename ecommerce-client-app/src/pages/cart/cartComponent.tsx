import React from 'react';
import { useCart } from '@/components/context/cartContext';

const Cart = () => {
  const { state } = useCart();
  const { cart } = state;
  console.log(cart)
  return (
    <div>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
        
      </ul>
      
    </div>
  );
};

export default Cart;
