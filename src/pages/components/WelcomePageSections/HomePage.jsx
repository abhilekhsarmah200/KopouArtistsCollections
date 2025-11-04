import React, { useState, useEffect } from 'react';
import { Gift, MoveRight } from 'lucide-react';
import Popup from '../PopUp/Popup';
import { useSearchParams } from 'next/navigation';

export default function HomePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get('section');
    if (sectionId) {
      // Wait for the page to load and then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleLinkClick = (linkLabel, sectionId, isExternalPage = false) => {
    if (isExternalPage) {
      // Handle external page navigation (like going to Our Contests)
      // You can use router.push here if needed
      window.location.href = '/ourcontest';
    } else {
      // Smooth scroll to section with offset for fixed navbar
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <>
      <div
        id='home'
        className='relative w-full md:h-[40rem] h-[30rem] px-8 mt-14'
      >
        {/* Background with opacity */}
        <div className='absolute bg-cover sm:bg-cover home  inset-0 bg-[#faf5ef] sm:bg-no-repeat opacity-50'></div>
        {/* <AnimatedCover /> */}

        {/* Content without opacity */}

        <div className='relative flex flex-col items-center justify-center h-full text-center'>
          <h1
            className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
        [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
          >
            Kopou Artist Collective
          </h1>
          <p
            className='montserrat-text text-sm md:text-[1rem] lg:text-xl text-black
        [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
          >
            Celebrating Artists, Culture & Collaboration
          </p>
          <div className='flex gap-2 montserrat-text'>
            <button
              onClick={() =>
                handleLinkClick('Vision & Mission', 'vision-mission')
              }
              className='z-10 text-[0.6rem] md:text-[1rem] lg:text-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center md:gap-2 mt-8 bg-white border border-[#c23c23] hover:border-[#c23c23]/70 text-[#c23c23] hover:text-[#c23c23]/70 py-2 px-4 rounded-xl'
            >
              Explore More <MoveRight className='h-3 md:h-auto' />
            </button>
            {/* <button
              onClick={() =>
                handleLinkClick('Winner Announcement', 'winner', true)
              }
              className=' animate-pulse z-10 text-[0.6rem] md:text-[1rem] lg:text-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex md:gap-2 mt-8 bg-[#c23c23] border border-[#c23c23] text-[white] py-2 px-4 rounded-xl'
            >
              Reveal Our Winner <Gift className='h-3 md:h-auto' />
            </button> */}
          </div>
        </div>
        <div>
          <img
            loading='lazy'
            title='Kopou Artist Collective icons'
            alt='Kopou Artist Collective icons'
            src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1759822516/KopouArtistsCollectionsIcon/bsmxszi9lpgjpg7qqhbo.png`}
            className='lg:h-46 sm:h-34 h-24 absolute top-10 md:top-20 left-10 md:left-20  transform hover:scale-130 rotate-12 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]'
          />
          <img
            loading='lazy'
            title='Kopou Artist Collective icons'
            alt='Kopou Artist Collective icons'
            src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1759822519/KopouArtistsCollectionsIcon/l0s00nvxmpef6uhd6qqd.png`}
            className='lg:h-32 sm:h-24 h-18 absolute top-15 md:top-20 right-10 md:right-20 transform hover:scale-130 rotate-12 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]'
          />
          <img
            loading='lazy'
            title='Kopou Artist Collective icons'
            alt='Kopou Artist Collective icons'
            src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1760492229/KopouArtistsCollectionsIcon/Webp/kmwviosh0sj4nrvrmwcp.webp`}
            className='lg:h-42 sm:h-32 h-22 absolute bottom-10 md:bottom-20 left-10 md:left-20 transform hover:scale-130 rotate-12 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]'
          />
          <img
            loading='lazy'
            title='Kopou Artist Collective icons'
            alt='Kopou Artist Collective icons'
            src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1759920322/KopouArtistsCollectionsIcon/k4i9fg8gbftcjjobw4fj.png`}
            className='lg:h-42 sm:h-32 h-22 absolute bottom-10 md:bottom-20 right-10 md:right-20 transform hover:scale-130 rotate-12 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]'
          />
        </div>
        <Popup />
      </div>
    </>
  );
}
