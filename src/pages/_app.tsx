import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/footer';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
