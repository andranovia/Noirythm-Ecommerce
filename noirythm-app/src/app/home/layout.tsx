import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Noirythm Ecommerce",
  description: "Welcome to Noirythm Ecommerce",
};

export default function HomeLayout({
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
