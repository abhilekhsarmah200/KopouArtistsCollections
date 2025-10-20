import React from 'react';
import GiftBox from './components/WinnerAnnouncement/WinnerAnnouncementBox';

export default function ContestsPage() {
  return (
    <div className='relative sm:px-8 px-4 z-10 h-full py-10 mt-[4rem]'>
      <div className="absolute inset-0 bg-contain sm:bg-contain bgimage bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1760152582/KopouArtistsCollectionsIcon/Webp/phzrrzfpiwtwdwg4eaxe.webp')] sm:bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1760148729/KopouArtistsCollectionsIcon/Webp/Banner5.webp')] opacity-60"></div>
      <h2
        className='flex justify-center sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
      >
        Contest Hub!
      </h2>
      <div className='flex lg:flex-row flex-col-reverse text-black text-left lg:items-center items-center gap-2 mt-5'>
        <div className='w-full'>
          <GiftBox
            giftImage={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1760872446/KopouArtistsCollectionsIcon/Contests%20Winners/1stWinner.webp`}
            altText='Amazing Surprise!'
            className='mb-8'
          />
        </div>
        <div className='lg:max-w-xl z-5 sm:max-w-lg max-w-sm bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
          <div className='relative md:h-full p-6 sm:p-10'>
            <div className='text-sm md:text-xl lg:text-2xl '>
              Welcome to the{' '}
              <b className='text-[#c23c23]'>Kopou Artist Collective</b> Contest
              Hub! Here, you’ll find all the exciting contests and challenges
              designed to inspire and recognize creative talents across art,
              music, design, filmmaking, and more. Explore past and ongoing
              contests, check out participation details, rewards, and deadlines
              — and be part of a growing community that celebrates originality,
              passion, and artistic expression. Join in, showcase your talent,
              and let your creativity shine with Kopou!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
