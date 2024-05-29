import { intentCheckout } from "@/utils/intentCheckout";
import { retrieveCheckout } from "@/utils/retrieveCheckout";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export type CheckoutProps = {
  checkoutData?: {
    purchased_products: purchased_product[] | string;
    unit_amount: number;
    current_url: string;
  };
  successId?: string
};


export type Checkout =  {
  sessionId: string;
  customer_details: {
      address: {
          city: string | null;
          country: string;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
      };
      email: string;
      name: string;
      phone: string | null;
      tax_exempt: string;
      tax_ids: any[];
  };
  cardInfo: {
      brand: string;
      checks: {
          address_line1_check: string | null;
          address_postal_code_check: string | null;
          cvc_check: string;
      };
      country: string;
      display_brand: string;
      exp_month: number;
      exp_year: number;
      fingerprint: string;
      funding: string;
      generated_from: any | null;
      last4: string;
      networks: {
          available: string[];
          preferred: string | null;
      };
      three_d_secure_usage: {
          supported: boolean;
      };
      wallet: any | null;
  };
  purchasedProducts: {
      name: string;
      amount: number;
      currency: string;
      quantity: number;
  }[];
}



export type purchased_product = {
  id: string;
  name: string;
};

const useCheckout = ({ checkoutData, successId }: CheckoutProps) => {
  const router = useRouter();

  const { data: checkoutDetail } = useQuery<Checkout | null>({
    queryKey: ["checkoutDetail"],
    queryFn: () => retrieveCheckout(successId),
  });

  const { mutateAsync: makeCheckout } = useMutation({
    mutationFn: () => intentCheckout({ checkoutData }),
    onSuccess: (response) => {
      if (response) {
        router.push(response.data.url);
      } else {
        console.log("Submit checkout failed");
      }
    },
  });

  return {
    makeCheckout,
    checkoutDetail
  };
};

export default useCheckout;
