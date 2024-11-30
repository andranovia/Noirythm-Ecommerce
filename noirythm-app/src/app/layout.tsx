import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
import { ReactQueryProvider } from "@/utils/ReactQueryProvider";
import { ChangesProvider } from "@/context/ChangesContext";

export const metadata: Metadata = {
  title: "Noirythm Ecommerce",
  description: "Welcome to Noirythm Ecommerce",
};

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.className}>
      <body>
        <ReactQueryProvider>
          <ChangesProvider>{children}</ChangesProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
