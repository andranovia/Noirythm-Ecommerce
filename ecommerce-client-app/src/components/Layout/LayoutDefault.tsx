import React from 'react';
import Footer from '../Footer/Footer';
import NavbarSection from '../Navbar/NavbarSection';


type LayoutProps = {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <>
      <NavbarSection />
      <div className='my-20'>
      <main>{children}</main>
      </div>
      <Footer/>
    </>
  );
};

export default LayoutDefault;
