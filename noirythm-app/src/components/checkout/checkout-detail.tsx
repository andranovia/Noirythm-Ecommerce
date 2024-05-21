import useCheckout from "@/hooks/useCheckout";
import React from "react";

const CheckoutDetail = ({successId}: {successId: string}) => {

    const { checkoutDetail } = useCheckout({ successId: successId });
    const firstPurchasedItem = checkoutDetail?.purchasedProducts[0];
    const { postal_code, line1, city, state, country } =
      checkoutDetail?.customer_details.address ?? {};

  return (
    <div className="flex justify-center flex-col items-center lg:w-3/4">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white  rounded-lg p-6 md:p-12 w-full ">
          <h1 className="text-3xl font-bold mb-6  mx-10   text-gray-800">
            Purchase Details
          </h1>
          <div className="lg:grid grid-cols-2 flex flex-col  gap-x-14 mt-10 border p-6 rounded-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Order Summary
              </h2>
              <div className="mt-4">
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Product Name</span>
                  <span className="font-medium text-gray-900 truncate">
                    {firstPurchasedItem?.name}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Quantity</span>
                  <span className="font-medium text-gray-900">
                    {firstPurchasedItem?.quantity}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Price per Item</span>
                  <span className="font-medium text-gray-900">
                    {" "}
                    {firstPurchasedItem?.amount}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Billing Information
              </h2>
              <div className="mt-4">
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium text-gray-900 truncate">
                    {checkoutDetail?.customer_details.name}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-8  mb-4">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium text-gray-900 truncate">
                    {checkoutDetail?.customer_details.email}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Address</span>
                  <span className="font-medium text-gray-900 truncate">
                    {`${postal_code ?? ""} ${line1 ?? ""} ${city ?? ""} ${
                      state ?? ""
                    } ${country ?? ""}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6 col-span-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Payment Information
              </h2>
              <div className="mt-4">
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Card Type</span>
                  <span className="font-medium text-gray-900">
                    {checkoutDetail?.cardInfo.brand}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Card Number</span>
                  <span className="font-medium text-gray-900">
                    **** **** **** {checkoutDetail?.cardInfo.last4}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-8 mb-4">
                  <span className="text-gray-600">Expiry Date</span>
                  <span className="font-medium text-gray-900">
                    {checkoutDetail?.cardInfo.exp_month}//
                    {checkoutDetail?.cardInfo.exp_year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetail;
