import { Guitar, MicVocal } from 'lucide-react';
import React from 'react';

export default function FutureGoals() {
  return (
    <div id='future-goals' className='relative sm:px-8 px-4 z-10 h-full py-10'>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1759806170/KopouArtistsCollectionsIcon/odqdxig2inufh8hb4jkq.png')] sm:bg-cover md:bg-cover lg:bg-cover opacity-40"
        style={{
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h1
          className='text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Future Goals
        </h1>
        <ul
          className='sm:px-8 px-4 list-decimal text-sm md:text-xl lg:text-2xl text-left text-black
        [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
        >
          <li>
            Support More Artists Kopou aims to help more talented artists from
            different fields — music, art, design, film, and performance — by
            giving them a platform to grow and shine.
          </li>
          <li>
            Create Big Projects In the future, Kopou wants to produce more music
            videos, art shows, digital campaigns, and creative collaborations
            that reach bigger audiences.
          </li>
          <li>
            Build a Creative Space Kopou dreams of having its own studio or
            creative hub where artists can come together, work, practice, and
            share ideas freely.
          </li>
          <li>
            Collaborate with Brands The collective plans to work with brands,
            companies, and organizations to create creative campaigns that
            benefit both the artists and the partners.
          </li>
          <li>
            Promote Northeast Art & Culture Kopou wants to take Assamese and
            Northeast art, music, and culture to national and international
            levels, showing the world the region’s creativity.
          </li>
          <li>
            Train Young Artists In the coming years, Kopou plans to start
            workshops, training programs, and internships to guide young talents
            and prepare them for the professional creative world.
          </li>
          <li>
            Grow as a Strong Community Kopou’s main goal is to build a strong,
            united community of artists who support each other and keep
            creativity alive for the long term.
          </li>
        </ul>
      </div>
      <Guitar className='lg:h-20 sm:h-16 h-8 absolute sm:top-5 top-3 sm:right-5 right-2 lg:w-20 sm:w-16 w-8 transform hover:scale-130 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]' />
    </div>
  );
}
