import React from 'react';
import futureGoals from '../data/futureGoals.data';
import Carousel from './components/Carousel/Carousel';

export default function FutureGoals() {
  return (
    <div id='future-goals' className='relative sm:px-8 px-4 z-10 h-full py-10'>
      <div className="absolute inset-0 bg-cover sm:bg-contain bgimage bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1760014025/KopouArtistsCollectionsIcon/Webp/hobxygrxd0g8jose9sua.webp')] sm:bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1760012721/KopouArtistsCollectionsIcon/Webp/Banner1.webp')] opacity-50"></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h1
          className='flex sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Future Goals
        </h1>
        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5'>
          {futureGoals.map((data, index) => (
            <div className='lg:max-w-xl max-w-sm bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <div className='relative text-left md:h-full p-6 sm:p-10'>
                <h2 className='text-sm md:text-xl lg:text-2xl font-bold text-[#c23c23]'>
                  {data?.title}
                </h2>
                <div className='text-base md:text-lg lg:text-xl'>
                  {data?.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='md:hidden'>
        <Carousel data={futureGoals} component={'bulletin'} />
      </div>
    </div>
  );
}
