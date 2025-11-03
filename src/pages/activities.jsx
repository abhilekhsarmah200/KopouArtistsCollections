import React from 'react';
import VideoCarousel from './components/Carousel/CustomCarousel/CustomResponsiveCarousel';

export default function activities() {
  return (
    <>
      <div className='relative sm:px-8 px-4 z-10 h-full py-10 mt-[4rem]'>
        <div className='absolute inset-0 bg-cover sm:bg-contain bgimage bg-[#faf5ef] opacity-60'></div>
        <div className='relative flex flex-col items-center justify-center h-full text-center'>
          <h2
            className='flex sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
          >
            Activities
          </h2>
          {/* <div className='max-w-lg shadow-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 4xl:max-w-[75%] text-black bg-white border border-[gray]/30 rounded-xl p-8 text-left md:text-justify overflow-hidden'>
            <p
              className='hidden md:block text-sm md:text-[1rem] lg:text-xl montserrat-text
  [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
            >
              Somewhere between sleepless nights and endless melodies, there’s a
              boy named Jahnu Priyam, still chasing the sound of his own dream.
              He’s not backed by fame or fortune — just faith, courage, and a
              voice that refuses to stay silent. 🎤 Every song he sings carries
              a piece of his struggle, every lyric a story untold. The journey
              isn’t easy, but he’s walking it with heart — one note, one
              performance, one hope at a time. Because some dreams don’t need
              shortcuts — they just need truth. 🌙 #JahnuPriyam #KopouArtist
              #RisingFromTheRoots
            </p>
          </div> */}
          <div className='mt-[2rem] w-full'>
            <VideoCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
