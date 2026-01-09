import { KeyboardMusic, MicVocal } from 'lucide-react';
import React, { useState } from 'react';

export default function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortContent = `Kopou Artist Collective is a creative community built to bring together talented artists, musicians, designers, filmmakers, and performers under one platform. It's a space where creativity meets collaboration, where individuals with different artistic skills can come together, share ideas, and create something meaningful...`;

  const fullContent = `Kopou Artist Collective is a creative community built to bring together talented artists, musicians, designers, filmmakers, and performers under one platform. It's a space where creativity meets collaboration, where individuals with different artistic skills can come together, share ideas, and create something meaningful. The collective aims to promote local and regional talent, giving them the right exposure, opportunities, and professional support to grow. At Kopou, every artist's voice matters. The collective works like a family, supporting each other, celebrating individuality, and building connections that lead to real artistic growth. It believes that creativity should not be limited by boundaries or resources, and that artists deserve a platform that truly values their passion. Whether it's through live shows, digital content, collaborations, or creative campaigns, Kopou Artist Collective focuses on showcasing the beauty of diverse art forms and cultural expressions. The name "Kopou" itself reflects freshness, creativity, and Assamese cultural roots, symbolizing new beginnings and vibrant artistic energy. The collective dreams of bridging the gap between local art and the larger creative industry by collaborating with brands, institutions, and other organizations. More than just an artist network, Kopou is a growing movement that inspires young creatives to believe in their art, work together, and make a mark in the modern cultural scene.`;

  return (
    <div id='about' className='relative sm:px-8 px-4 h-full py-4 md:py-10'>
      <div className='absolute inset-0 bg-cover sm:bg-contain bgimage bg-[#faf5ef] opacity-60'></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h2
          className='flex sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          About Us
        </h2>
        <div className='max-w-lg shadow-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 4xl:max-w-[75%] text-black bg-white border border-[gray]/30 rounded-xl p-8 text-left md:text-justify overflow-hidden'>
          <div className='sm:float-right flex justify-center md:ml-8 ml-4 md:mb-6 mb-4 md:mt-2'>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760001362/KopouArtistsCollectionsIcon/Webp/yxlnxbvxgucjipucrqus.webp'
              className='md:h-[18rem] bg-white rounded-full sm:h-[12rem] h-[8rem] md:w-[18rem] sm:w-[12rem] w-[8rem] object-cover shadow-sm'
              alt='Kopou Artist Collective'
            />
          </div>
          <p
            className='hidden md:block text-sm md:text-[1rem] lg:text-xl montserrat-text
      [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
          >
            {fullContent}
          </p>
          <div
            className={`md:hidden block transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-full' : 'max-h-96 overflow-hidden'
            }`}
          >
            <p
              className='text-sm md:text-[1rem] lg:text-xl montserrat-text
      [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
            >
              {isExpanded ? fullContent : shortContent}
            </p>
          </div>
          <button
            onClick={toggleReadMore}
            className='md:hidden float-end block mt-4 px-6 py-2 text-[#c23c23] cursor-pointer transition-colors duration-300 font-semibold text-sm md:text-base transform hover:scale-105'
          >
            {isExpanded ? '▲ Read Less' : '▼ Read More'}
          </button>
        </div>
      </div>
    </div>
  );
}
