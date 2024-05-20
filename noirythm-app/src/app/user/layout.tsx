import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";
export const metadata: Metadata = {
  title: "User Profile",
  description: "See your profile detail",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
     
    </>
  );
}
