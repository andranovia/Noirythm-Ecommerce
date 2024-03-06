import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="my-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutDefault;
