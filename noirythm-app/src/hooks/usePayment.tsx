import { intentPayment } from "@/utils/intentPayment";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";


export type PaymentProps = {
  paymentData: {
    product_name: string;
    unit_amount: number;
    current_url: string
  };
};

const usePayment = ({ paymentData }: PaymentProps) => {
  const router = useRouter()


  const { mutateAsync: makePayment } = useMutation({
    mutationFn: () => intentPayment({paymentData}),
    onSuccess: (response) => {
      if (response) {
        router.push(response.data.url)
      } else {
        console.log("Submit payment failed");
      }
    },
  });

  return {
    makePayment,
  };
};

export default usePayment;
