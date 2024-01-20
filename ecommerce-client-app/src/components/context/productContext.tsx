import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  id: string;
  promo_text: string;
}

interface ProductContextProps {
  productItems: ProductItem[];
  setProductItems: Dispatch<SetStateAction<ProductItem[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = React.memo(({ children }) => {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true); 

  return (
    <ProductContext.Provider value={{ productItems, setProductItems, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
});

export const useProductContext = (): ProductContextProps => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return context;
};
