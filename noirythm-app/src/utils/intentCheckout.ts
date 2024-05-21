import { CheckoutProps } from "@/hooks/useCheckout";
import axiosInstance from "./axiosInstance";

export async function intentCheckout({ checkoutData }: CheckoutProps) {
  const unitAmount = checkoutData?.unit_amount;
  const integerAmount = unitAmount ? Math.round(unitAmount * 100) : 0;

  try {
    const response = await axiosInstance.post("/api/intent-checkout", {
      purchased_products: checkoutData?.purchased_products,
      unit_amount: integerAmount,
      current_url: checkoutData?.current_url,
    });

    if (response.status === 200) {
      return response;
    }
    return false;
  } catch (error) {
    console.log("Error intending Checkout", error);
    return false;
  }
}
