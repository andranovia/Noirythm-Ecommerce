import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Noirythm",
  description: "About Noirythm",
};

export default function AboutLayout({
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
