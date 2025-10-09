import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/footer';

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
