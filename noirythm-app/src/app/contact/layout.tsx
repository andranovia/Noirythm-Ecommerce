import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Noirythm",
  description: "Contact Noirythm",
};

export default function ContactLayout({
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
