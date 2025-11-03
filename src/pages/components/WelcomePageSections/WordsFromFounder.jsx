import React from 'react';
import Carousel from '../Carousel/Carousel';

export default function WordsFromFounder() {
  const founderQuotes = [
    {
      id: 1,
      author: 'Sayahna Sandhya',
      position: 'Founder',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762172555/KopouArtistsCollectionsIcon/KopouTeam/vltg2iefhm1h8dowinm4.webp',
    },
    {
      id: 2,
      author: 'Bhargav Dutta',
      position: 'Creative-Founder',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762172555/KopouArtistsCollectionsIcon/KopouTeam/xk6gf4h0ksfao3iv9qpe.webp',
    },
    {
      id: 3,
      author: 'Abhilekh Sarmah',
      position: 'Web Developer',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762173219/KopouArtistsCollectionsIcon/KopouTeam/qm2kt2u1ztcxuf1nd7n9.webp',
    },
    {
      id: 4,
      author: 'Velentina Gogoi',
      position: 'Social Media Associate',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762172554/KopouArtistsCollectionsIcon/KopouTeam/w5e67aofxbjp3a4bfdij.webp',
    },
    {
      id: 5,
      author: 'Shiva Dey',
      position: 'Graphic Designer',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762172554/KopouArtistsCollectionsIcon/KopouTeam/onktzejghufjjumtylvs.webp',
    },
    {
      id: 6,
      author: 'Himan Sharma',
      position: 'Video Editor',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762186012/KopouArtistsCollectionsIcon/KopouTeam/dww2dcjevnvzyrvj1hyf.webp',
    },
  ];
  return (
    <div
      id='wordsfromfounder'
      className='relative sm:px-8 px-4 z-10 h-full py-4 md:py-10'
    >
      <div className='absolute inset-0 bg-contain xs:bg-cover sm:bg-contain bg-[#faf5ef] opacity-50'></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h2
          className='flex sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Meet Our Team
        </h2>
        <div className='pt-5'>
          <Carousel data={founderQuotes} />
        </div>
      </div>
    </div>
  );
}
