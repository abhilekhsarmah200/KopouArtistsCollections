import { KeyboardMusic, MicVocal } from 'lucide-react';
import React from 'react';

export default function AboutUs() {
  return (
    <div id='about' className='relative sm:px-8 px-4 z-10 h-full py-10'>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[url('/Banner4.png')] sm:bg-cover md:bg-cover lg:bg-cover opacity-50"
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
          About Us
        </h1>
        <div className='text-black text-left md:text-justify overflow-hidden'>
          <div className='sm:float-right flex justify-center md:ml-8 ml-4 md:mb-6 mb-4 md:mt-2'>
            <img
              src='/icon2.png'
              className='md:h-[18rem] bg-white rounded-full sm:h-[12rem] h-[8rem] md:w-[18rem] sm:w-[12rem] w-[8rem] object-cover shadow-lg'
              alt='Kopou Artist Collective'
            />
          </div>
          <p
            className='text-sm md:text-xl lg:text-2xl
    [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
          >
            Kopou Artist Collective is a creative community built to bring
            together talented artists, musicians, designers, filmmakers, and
            performers under one platform. It's a space where creativity meets
            collaboration, where individuals with different artistic skills can
            come together, share ideas, and create something meaningful. The
            collective aims to promote local and regional talent, giving them
            the right exposure, opportunities, and professional support to grow.
            At Kopou, every artist's voice matters. The collective works like a
            family, supporting each other, celebrating individuality, and
            building connections that lead to real artistic growth. It believes
            that creativity should not be limited by boundaries or resources,
            and that artists deserve a platform that truly values their passion.
            Whether it's through live shows, digital content, collaborations, or
            creative campaigns, Kopou Artist Collective focuses on showcasing
            the beauty of diverse art forms and cultural expressions. The name
            "Kopou" itself reflects freshness, creativity, and Assamese cultural
            roots, symbolizing new beginnings and vibrant artistic energy. The
            collective dreams of bridging the gap between local art and the
            larger creative industry by collaborating with brands, institutions,
            and other organizations. More than just an artist network, Kopou is
            a growing movement that inspires young creatives to believe in their
            art, work together, and make a mark in the modern cultural scene.
          </p>
        </div>
      </div>
      <KeyboardMusic className='lg:h-20 sm:h-16 h-8 absolute sm:top-5 top-3 sm:left-5 left-2 lg:w-20 sm:w-16 w-8 transform hover:scale-130 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]' />
    </div>
  );
}
