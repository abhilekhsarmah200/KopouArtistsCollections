import React from 'react';
import BannerCarousel from '../BannerCarousel';

export default function UpcomingEvents() {
  return (
    <div
      id='UpcomingEvents'
      className='relative sm:px-8 px-4 z-10 h-full py-0 md:py-0'
    >
      <div className='absolute inset-0 bg-contain xs:bg-cover bg-[#faf5ef] sm:bg-contain opacity-50'></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h2
          className='flex gap-1 sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Upcoming Events
        </h2>
      </div>
      <div className='flex lg:flex-row flex-col mt-2 w-full'>
        <div className='lg:w-1/2 w-full'>
          <BannerCarousel />
        </div>
        <div className='lg:w-1/2 w-full relative opacity-100 montserrat-text text-sm md:text-[1rem] lg:text-xl p-5'>
          <div className='uppercase text-[1.3rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold text-[#c23c23] poppins-text'>
            Feel the Beat. Live the Moment. Don’t Miss the Night Everyone Will
            Talk About....🔥
          </div>
          <p>
            Experience an electrifying live performance that brings together raw
            energy, powerful lyrics, and an unforgettable crowd vibe. This is
            not just a concert — it’s a night where music, passion, and people
            come together to create memories that last forever.
          </p>
          <p className='text-[0.7rem] mt-4 border border-[#c23c23] rounded-2xl p-2 md:w-[50%] w-[80%] float-right md:text-[0.8rem] text-[#d49218] lg:text-[1rem] animate-bounce'>
            Limited seats!! Unlimited memories. Book your tickets before it’s
            sold out...
          </p>
        </div>
      </div>
    </div>
  );
}
