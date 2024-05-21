"use client";

import React from "react";
import { motion } from "framer-motion";
import { defaultTransition } from "@/utils/transitionMotion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CheckoutDetail from "@/components/checkout/checkout-detail";

const PaymentSuccess = ({ params }: { params: { success_id: string } }) => {

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <motion.div
      initial={{ backgroundColor: "#F3F4F6" }}
      animate={{ backgroundColor: "#FFFFFF" }}
      transition={{
        ...defaultTransition,
        duration: 5,
        backgroundColor: { delay: 4 },
      }}
      className="min-h-screen bg-gray-100 relative flex justify-center flex-col items-center w-full"
    >
      <motion.div
        initial={{
          visibility: "visible",
          opacity: 1,
        }}
        animate={{
          visibility: "hidden",
          opacity: 0,
        }}
        transition={{
          visibility: { delay: 5 },
          opacity: { delay: 4 },
          duration: 5,
        }}
        className="flex justify-center flex-col items-center fixed top-1/2 "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -40] }}
          transition={{
            ...defaultTransition,
            duration: 4,
            opacity: { delay: 0.6 },
            y: { delay: 2 },
          }}
          className="w-14 h-14 bg-slate-800 rounded-full  p-4 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F2F2F2"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, y: 30 }}
              animate={{ pathLength: 1, y: 0 }}
              transition={{ ...defaultTransition, duration: 2.4, delay: 0.6 }}
              d="M4.5 12.75l6 6 9-13.5"
              className={"relative"}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...defaultTransition,
            duration: 2,
            delay: 2,
          }}
          className="font-bold text-gray-800 text-lg relative"
        >
          <h3>Payment Success</h3>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          visibility: "hidden",
          opacity: 0,
        }}
        animate={{
          visibility: "visible",
          opacity: 1,
        }}
        transition={{
          visibility: { delay: 5 },
          opacity: { delay: 5 },
          duration: 6,
        }}
        className="flex lg:flex-row flex-col my-10  lg:my-0 items-center justify-center lg:w-[80%] "
      >
        <div className="lg:w-[40%] flex px-10 lg:px-0  flex-col gap-4  lg:gap-20">
          <div
            className="flex items-center gap-4"
            onClick={handleGoBack}
            style={{ cursor: "pointer" }}
          >
            <Image
              src="https://img.icons8.com/?size=100&id=85498&format=png&color=000000"
              alt="package-image"
              width={40}
              height={40}
              className="w-6 h-6"
            />
            <h4 className="font-semibold text-lg">Go Back</h4>
          </div>
          <Image
            src={"/img/purchased/package.jpg"}
            alt="package-image"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <CheckoutDetail successId={params.success_id}/>
      </motion.div>
    </motion.div>
  );
};

export default PaymentSuccess;
