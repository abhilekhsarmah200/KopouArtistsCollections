import React from 'react';

export default function VisionMission() {
  return (
    <div
      id='vision-mission'
      className='relative sm:px-8 px-4 z-10 h-full py-4 md:py-10'
    >
      <div className='absolute inset-0 bg-contain xs:bg-cover bg-[#faf5ef] sm:bg-contain bgimage opacity-50'></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h2
          className='flex gap-1 sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Vision & Mission
        </h2>

        <div className='flex lg:flex-row flex-col-reverse text-black text-left lg:items-center items-center gap-2 mt-5'>
          <div className='w-full border border-[gray]/30 bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
            <div className='relative 2xl:max-w-3xl lg:max-w-xl sm:max-w-lg max-w-sm md:h-full p-6 sm:p-10'>
              <div className='montserrat-text text-sm md:text-[1rem] lg:text-xl '>
                Kopou Artist Collective's vision is to create a platform that
                brings together talented artists, musicians, and creators from
                Assam and across the Northeast. Our goal is to build a strong
                community where art, culture, and creativity thrive through
                collaboration, innovation, and opportunity. We aim to promote
                local talent on national and international stages, preserve our
                cultural roots, and inspire the next generation of artists to
                dream bigger and reach higher.
              </div>
            </div>
          </div>
          <div className='w-full mx-auto'>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760001360/KopouArtistsCollectionsIcon/Webp/tgixzdtumjcgddghljs9.webp'
              className=' md:h-[20rem] sm:h-[14rem] h-[10rem] md:w-[20rem] sm:w-[14rem] w-[10rem] mx-auto'
              alt='Kopou Artist Collective image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
