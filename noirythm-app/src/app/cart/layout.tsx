

import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "User Cart",
  description: "See your planning",
};

export default function CartLayout({
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

