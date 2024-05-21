import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Detail",
  description: "User product purchase",
};

export default function PaymentDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
      {children}
     
    </>
  );
}
