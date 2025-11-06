import Head from 'next/head';
import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function kopou2026() {
  const [selectedImage, setSelectedImage] = useState(null);

  const kopou2026 = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762409643/KopouArtistsCollectionsIcon/Webp/zt6o5jo8ano0hvxg0lvk.webp',
      alt: 'Kopou - Solo Singing Competition',
      className:
        'rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer lg:h-[30rem] md:h-[25rem] h-[20rem] w-full',
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762360651/KopouArtistsCollectionsIcon/Webp/qpwgini7ezwfnppfjejl.jpg',
      alt: 'Coming Soon',
      className:
        'rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer lg:h-[30rem] md:h-[25rem] h-[20rem] w-full animate-pulse',
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762360651/KopouArtistsCollectionsIcon/Webp/qpwgini7ezwfnppfjejl.jpg',
      alt: 'Coming Soon',
      className:
        'rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer lg:h-[30rem] md:h-[25rem] h-[20rem] w-full animate-pulse',
    },
  ];

  return (
    <>
      <Head>
        <title>Kopou 2026</title>
      </Head>

      <div className='relative sm:px-8 px-4 z-10 h-full py-10 mt-[4rem]'>
        <div className='absolute inset-0 bg-contain sm:bg-contain bgimage bg-[#faf5ef] opacity-50'></div>

        <div className='relative flex flex-col items-center justify-center h-full text-center'>
          <h2
            className='flex gap-1 sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
          >
            Kopou 2026
          </h2>

          <div className='max-w-2xl lg:max-w-4xl xl:max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5'>
            {kopou2026.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.alt}
                title={item.alt}
                className={item.className}
                onClick={() =>
                  setSelectedImage({ img: item.img, alt: item.alt })
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-70 backdrop-blur-sm'>
          <div className='relative w-[90%] md:w-[80%] lg:w-[70%] max-h-[90vh] rounded-lg overflow-hidden shadow-2xl'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-0 cursor-pointer right-0 z-50 bg-[#c23c23] text-white p-2 rounded-full shadow-md transition-all duration-300'
            >
              <X size={24} />
            </button>

            <img
              src={selectedImage.img}
              title={selectedImage.alt}
              className='md:w-[30rem] w-[25rem] mx-auto md:h-[40rem] h-[30rem] border-none rounded-xl py-4'
            />
          </div>
        </div>
      )}
    </>
  );
}
