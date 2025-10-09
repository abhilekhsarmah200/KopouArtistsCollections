import React, { useState } from 'react';
import { Guitar, MicVocal, KeyboardMusic } from 'lucide-react';

export default function HomePage() {
  return (
    <div
      id='home'
      className='relative w-full md:h-[40rem] h-[30rem] px-8 mt-14'
    >
      {/* Background with opacity */}
      <div className="absolute bg-contain sm:bg-cover sm:bg-fixed inset-0 sm:bg-no-repeat bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1759822717/KopouArtistsCollectionsIcon/sfvjsqcdlocvxcwop78w.jpg')] sm:bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1759806135/KopouArtistsCollectionsIcon/sjr0zacz2x6tirqowboh.png')] opacity-50"></div>

      {/* Content without opacity */}

      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h1
          className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4
        [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
        >
          Kopou Artist Collective
        </h1>
        <p
          className='text-sm md:text-xl lg:text-2xl text-black
        [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
        >
          Celebrating Artists, Culture & Collaboration
        </p>
      </div>
      <div>
        <img
          src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1759822516/KopouArtistsCollectionsIcon/bsmxszi9lpgjpg7qqhbo.png`}
          className='lg:h-46 sm:h-34 h-24 absolute top-20 left-5  transform hover:scale-130 rotate-12 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]'
        />
        <img
          src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1759822519/KopouArtistsCollectionsIcon/l0s00nvxmpef6uhd6qqd.png`}
          className='lg:h-32 sm:h-24 h-18 absolute top-20 right-5 transform hover:scale-130 rotate-12 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]'
        />
        <img
          src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1759920322/KopouArtistsCollectionsIcon/k4i9fg8gbftcjjobw4fj.png`}
          className='lg:h-42 sm:h-32 h-22 absolute bottom-20 right-5 transform hover:scale-130 rotate-12 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]'
        />
      </div>
    </div>
  );
}
