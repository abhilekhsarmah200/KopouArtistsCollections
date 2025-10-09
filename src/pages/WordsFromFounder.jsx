import React from 'react';
import Carousel from './components/Carousel/Carousel';

export default function WordsFromFounder() {
  const founderQuotes = [
    {
      id: 1,
      text: 'Kopou Artist Collective is built on the belief that art thrives in unity. Together, we celebrate creativity, culture, and collaboration',
      author: 'Sayahna Sandhya Kaushik',
      position: 'Founder',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1760002643/KopouArtistsCollectionsIcon/Webp/kl0teiiddhwbbemcikei.webp',
    },
    {
      id: 2,
      text: 'Kopou Artist Collective is more than a management platform — it’s a movement that celebrates originality, hard work, and the power of togetherness in the creative world',
      author: 'Bhargav Dutta',
      position: 'Creative-Founder',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1760002643/KopouArtistsCollectionsIcon/Webp/fmae9tar6wgpr0pvlavb.webp',
    },
  ];
  return (
    <div id='about' className='relative sm:px-8 px-4 z-10 h-full py-10'>
      <div className="absolute inset-0 sm:bg-fixed bg-contain bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1759974615/KopouArtistsCollectionsIcon/fdqfd6k5mzh6xxw4ayfo.png')] sm:bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1760001870/KopouArtistsCollectionsIcon/Webp/gyiog0frvrrczqfynov5.webp')] opacity-50"></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h1
          className='text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Words From Founder
        </h1>
        <div className='pt-5'>
          <Carousel data={founderQuotes} />
        </div>
      </div>
    </div>
  );
}
