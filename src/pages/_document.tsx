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

        {/* Google Site Verification */}
        <meta
          name='google-site-verification'
          content='JAxJFQLMJhM4KtOp4tSwF-9VLzBdTJQcSYwEGAoytpk'
        />

        {/* Bing Site Verification */}
        <meta name='msvalidate.01' content='A02E9F95937DDCC6EADA821108194993' />

        <link rel='canonical' href='https://kopouforartists.in/' />

        {/* ✅ Favicon and App Icons */}
        <link rel='icon' type='image/png' href='/favicon.png' sizes='96x96' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon.png' />
        <link rel='manifest' href='/site.webmanifest' />

        {/* ✅ Google Font Example */}
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />

        {/* Structured Data for Logo */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kopou Artist Collective',
              url: 'https://kopouforartists.in',
              logo: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1760584530/KopouArtistsCollectionsIcon/Webp/hvxv1jxgeu8xnlo9x2sg.png',
            }),
          }}
        />

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

        {/* Google Font Link */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
