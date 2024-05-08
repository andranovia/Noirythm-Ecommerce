import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/utils/ReactQueryProvider";
import { ChangesProvider } from "@/context/ChangesContext";

export const metadata: Metadata = {
  title: "Noirythm Ecommerce",
  description: "Welcome to Noirythm Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider><ChangesProvider>{children}</ChangesProvider></ReactQueryProvider>
      </body>
    </html>
  );
}
