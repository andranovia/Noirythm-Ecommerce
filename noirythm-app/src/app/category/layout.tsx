import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Noirythm Category",
  description: "See diversity of category",
};

export default function CategoryLayout({
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
