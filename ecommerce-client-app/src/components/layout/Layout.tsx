import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className='my-20'>
      <main>{children}</main>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
