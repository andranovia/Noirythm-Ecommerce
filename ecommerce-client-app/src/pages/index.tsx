import Home from './home/home';
import NavbarComponent from '../components/navbar-section/navbar-app';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return (
    <>
  
        <NavbarComponent />
        <Home />


    </>
  );
}
