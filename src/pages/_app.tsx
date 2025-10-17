import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/footer';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const is404Page = router.pathname === '/404';
  return (
    <>
      {/* Load after page becomes interactive */}
      <Script
        src='https://analytics.example.com/script.js'
        strategy='afterInteractive'
      />

      {/* Load during browser idle time */}
      <Script
        src='https://chat-widget.example.com/chat.js'
        strategy='lazyOnload'
      />
      {!is404Page && <Navbar />}
      <Component {...pageProps} />
      {!is404Page && <Footer />}
    </>
  );
}
