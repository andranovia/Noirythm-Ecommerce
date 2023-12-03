import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartState {
  cart: { [userId: string]: Product[] };
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { userId: string; product: Product } }
  | { type: 'REMOVE_FROM_CART'; payload: { userId: string; productId: string } };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { userId, product } = action.payload;
      const updatedUserCart = [...(state.cart[userId] || []), product];
      return {
        ...state,
        cart: {
          ...state.cart,
          [userId]: updatedUserCart,
        },
      };
    case 'REMOVE_FROM_CART':
      const { userId: removeUserId, productId } = action.payload;
      const updatedCart = (state.cart[removeUserId] || []).filter(item => item.id !== productId);
      return {
        ...state,
        cart: {
          ...state.cart,
          [removeUserId]: updatedCart,
        },
      };
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: {} });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
