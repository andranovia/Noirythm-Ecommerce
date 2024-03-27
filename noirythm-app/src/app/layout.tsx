import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/utils/ReactQueryProvider";

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
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
