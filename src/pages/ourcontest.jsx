import React from 'react';
import GiftBox from './components/WinnerAnnouncement/WinnerAnnouncementBox';
import CountdownTimer from './components/CountDownComponent/CountDown';
import ResponsiveCarousel from './components/Carousel/ResponsiveCarousel';
import Head from 'next/head';

export default function ContestsPage() {
  return (
    <>
      <Head>
        <title>Kopou Contest</title>
      </Head>
      <div className='relative sm:px-8 px-4 z-10 h-full py-10 mt-[4rem]'>
        <div className='absolute inset-0 bg-contain sm:bg-contain bg-[#faf5ef] opacity-60'></div>
        <h2
          className='flex justify-center sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 mt-5 
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)] poppins-text'
        >
          Contest Hub!
        </h2>
        <div className='flex lg:flex-row flex-col-reverse text-black text-left lg:items-center items-center gap-2 mt-8'>
          {/* <div className='w-full'>
          <CountdownTimer />
          <div className='animate-fade-in'>
            <GiftBox
              giftImage='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760872446/KopouArtistsCollectionsIcon/Contests%20Winners/1stWinner.webp'
              altText='Amazing Surprise!'
              className='mb-8'
            />
          </div>
        </div> */}
          <div className='max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 4xl:max-w-[75%] z-5 bg-white border border-[gray]/30 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 mx-auto'>
            <div className='relative md:h-full p-6 sm:p-10'>
              <div className='text-sm md:text-xl lg:text-2xl montserrat-text'>
                Welcome to the{' '}
                <b className='text-[#c23c23]'>Kopou Artist Collective</b>{' '}
                Contest Hub! Here, you’ll find all the exciting contests and
                challenges designed to inspire and recognize creative talents
                across art, music, design, filmmaking, and more. Explore past
                and ongoing contests, check out participation details, rewards,
                and deadlines — and be part of a growing community that
                celebrates originality, passion, and artistic expression. Join
                in, showcase your talent, and let your creativity shine with
                Kopou!
              </div>
            </div>
          </div>
        </div>
        <h2
          className='flex justify-center sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)] mt-5'
        >
          Our Winners
        </h2>
        <div className='max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 4xl:max-w-[75%] mx-auto'>
          <ResponsiveCarousel />
        </div>
      </div>
    </>
  );
}
