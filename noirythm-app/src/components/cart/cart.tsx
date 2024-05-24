import { useChanges } from "@/context/ChangesContext";
import CartItem from "./cart-item";
import { Dispatch, SetStateAction } from "react";
import Product from "../product/product";
import { CheckedProduct } from "@/app/cart/page";
import { useCart } from "@/hooks/useCart";
import CartItemLoading from "./cart-item-loading";

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
  }[];
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setCheckedProducts: Dispatch<SetStateAction<CheckedProduct[]>>;
  checkedProduct: CheckedProduct[];
};

const Cart = ({
  userCart,
  setTotalPrice,
  setCheckedProducts,
  checkedProduct,
}: CartProps) => {
  const { isChangesSaved } = useChanges();
  const { userCartLoading } = useCart();

  const handleProductChecked = (product: Product, isChecked: boolean) => {
    const productPrice = parseFloat(product.product_price);
    if (isChecked) {
      setTotalPrice((prevData) => +(prevData + productPrice).toFixed(2));
      setCheckedProducts((prev) => [
        ...prev,
        { id: product.id, name: product.product_name },
      ]);
    } else {
      setTotalPrice((prevData) => +(prevData - productPrice).toFixed(2));
      setCheckedProducts((prev) => prev.filter((p) => p.id !== product.id));
    }
  };

  return (
    <div className="lg:grid grid-cols-1  items-center gap-4 my-10 lg:mt-0">
      {userCartLoading ? (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <CartItemLoading key={index}/>
          ))}
        </>
      ) : (
        <>
          {/* {userCart?.map((item: Product, index: number) => {
            return (
              <div
                key={item.id || index}
                className="bg-white  lg:w-[40rem] w-full flex justify-start items-center px-4 lg:px-6 lg:gap-4"
              >
                <input
                  name="product-checked"
                  id="checked-checkbox"
                  type="checkbox"
                  checked={!!checkedProduct.find((p) => p.id === item.id)}
                  onChange={(e) => handleProductChecked(item, e.target.checked)}
                  className="w-5 h-5  bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
                />
                <CartItem item={item} />
              </div>
            );
          })} */}
            {Array.from({ length: 3 }).map((_, index) => (
            <CartItemLoading key={index}/>
          ))}
        </>
      )}

      {isChangesSaved && (
        <>
          <div className="w-full fixed flex bottom-0   justify-center items-center z-40">
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
