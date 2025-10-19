import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';

export default function Document() {
  return (
    <Html lang='en' data-theme='light'>
      <Head>
        {/* ✅ Basic SEO */}
        <meta
          name='description'
          content='Celebrating Artists, Culture & Collaboration'
        />
        <meta
          name='keywords'
          content='Kopou, Kopou Artists, Kapou, Kopou Phul, Kopou Artists Collective, kopouforartists, kopou for artists'
        />
        <meta name='author' content='Abhilekh Sarmah' />
        <meta name='theme-color' content='#0ea5e9' />
        <meta
          name='google-site-verification'
          content='hwsZgPga5PwvvlVGotQFLXXuEFC2pJtfkrx5DrxDm1Q'
        />
        <link rel='canonical' href='https://kopouforartists.in/' />
        {/* ✅ Favicon and App Icons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Google Site Logo (Recommended: 112x112px) */}
        {/* <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon.png' /> */}

        {/* ✅ Google Font Example */}
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />

        {/* Structured Data for Logo */}
        {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kopou For Artists',
              url: 'https://kopouforartists.in',
              logo: '/favicon.png',
              description: 'Celebrating Artists, Culture & Collaboration',
            }),
          }}
        /> */}

        {/* ✅ Open Graph / Social Preview */}
        <meta property='og:title' content='Kopou Artist Collective' />
        <meta
          property='og:description'
          content='Celebrating Artists, Culture & Collaboration'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://kopouforartists.in/' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760073679/KopouArtistsCollectionsIcon/Webp/icon2.webp'
        />
        <meta property='og:site_name' content='Kopou Artist Collective' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Kopou Artist Collective' />
        <meta
          name='twitter:description'
          content='Celebrating Artists, Culture & Collaboration'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760073679/KopouArtistsCollectionsIcon/Webp/icon2.webp'
        />

        <meta
          name='image'
          content='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760073679/KopouArtistsCollectionsIcon/Webp/icon2.webp'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
