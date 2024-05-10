
import CartItem from "./cart-item";

interface Product {
  id: string;
  product_description: string;
  product_image: string;
  product_name: string;
  product_price: string;

}


type CartProps = {
  userCart: {
    id: string;
    product_description: string;
    product_image: string;
    product_name: string;
    product_price: string;
  }[]
}

const Cart = ({userCart}: CartProps) => {
 

  return (
    <div className='lg:grid grid-cols-2  items-center gap-4 my-10'>
      {userCart?.map((item: Product, index: number) => (
        <CartItem key={item.id || index} item={item} />
      ))}
    </div>
  );
};

export default Cart;
