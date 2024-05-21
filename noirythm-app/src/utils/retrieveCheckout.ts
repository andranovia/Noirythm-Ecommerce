import { Checkout } from "@/hooks/useCheckout";
import axiosInstance from "./axiosInstance";

export async function retrieveCheckout(successId?: string): Promise<Checkout | undefined> {
  try {
    if (successId !== undefined) {
      const response = await axiosInstance.get<Checkout>(`/api/retrieve-checkout/${successId}`);

      if (response.status === 200) {
        return response.data;
      }
    }
  } catch (error) {
    console.log("Error retrieving Checkout", error);
  }
  return undefined;
}
