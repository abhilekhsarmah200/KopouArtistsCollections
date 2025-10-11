import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';

export default function Document() {
  return (
    <Html lang='en' data-theme='light'>
      <Head>
        {/* ✅ Basic SEO */}
        <meta
          name='description'
          content='A modern Next.js web application with enhanced performance and design.'
        />
        <meta
          name='keywords'
          content='Kopou, Kopou Artists, Kapou, Kopou Phul, Kopou Artists Collective'
        />
        <meta name='author' content='Your Name' />
        <meta name='theme-color' content='#0ea5e9' />

        {/* ✅ Favicon and App Icons */}
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        {/* ✅ Google Font Example */}
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />

        {/* ✅ Open Graph / Social Preview */}
        <meta property='og:title' content='Kopou Artist Collective' />
        <meta
          property='og:description'
          content='Celebrating Artists, Culture & Collaboration'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://yourdomain.com' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760001360/KopouArtistsCollectionsIcon/Webp/znosqhncgjhvghdgfxij.webp'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
