import { PaymentProps } from "@/hooks/usePayment";
import axiosInstance from "./axiosInstance";

export async function intentPayment({paymentData} : PaymentProps) {
    const unitAmount = paymentData.unit_amount;
    const integerAmount = Math.round(unitAmount * 100);

    try {
        const response = await axiosInstance.post('/api/payment', {
            'product_name': paymentData.product_name,
            'unit_amount': integerAmount,
            'current_url': paymentData.current_url
        });

        if(response.status === 200){
            return response
        }
        return false;
    }
    catch (error) {
        console.log("Error intending payment", error)
        return false;
    }
}