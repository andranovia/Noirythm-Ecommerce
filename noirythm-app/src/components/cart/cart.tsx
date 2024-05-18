
import { useChanges } from "@/context/ChangesContext";
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
  const { isChangesSaved } = useChanges();

  return (
    <div className='lg:grid grid-cols-1  items-center gap-4 my-10 lg:mt-0'>
      {userCart?.map((item: Product, index: number) => (
        <CartItem key={item.id || index} item={item} />
      ))}
      {isChangesSaved && (
            <>
              <div className="w-full fixed flex bottom-0 justify-center items-center z-40">
                <div className=" bg-emerald-600 w-[16rem] h-14 rounded-md bottom-14 mb-10">
                  <div className="p-4 flex justify-center items-center">
                    <p className="text-md font-bold text-white">
                      Changes have been saved
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
    </div>
  );
};

export default Cart;
