import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Noirythm Ecommerce",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>{children}</section>
  );
}
