import { Checkout } from "@/service/hooks/useCheckout";
import axiosInstance from "../api/axiosInstance";

export async function retrieveCheckout(
  successId?: string
): Promise<Checkout | null> {
  try {
    if (successId !== undefined) {
      const response = await axiosInstance.get<Checkout>(
        `/api/retrieve-checkout/${successId}`
      );

      console.log(response);

      if (response.status === 200) {
        return response.data;
      }
    }
    return null;
  } catch (error) {
    console.log("Error retrieving Checkout", error);
  }
  return null;
}
