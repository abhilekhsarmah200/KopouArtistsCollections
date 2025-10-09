import React from 'react';
import { Guitar, MicVocal, KeyboardMusic } from 'lucide-react';

export default function Benefits() {
  return (
    <div id='benefits' className='relative sm:px-8 px-4 z-10 h-full py-10'>
      <div className="absolute inset-0 sm:bg-fixed bg-contain bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1759974619/KopouArtistsCollectionsIcon/eooz9wrdpzooeuoxr2rb.png')] sm:bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1759806178/KopouArtistsCollectionsIcon/yr4pmfnsg2avaekrxqaa.png')] opacity-50"></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h1
          className='text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Benefits for Artists
        </h1>
        <ul
          className=' list-item sm:px-8 px-2 text-sm md:text-xl lg:text-2xl text-left text-black
        [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
        >
          <li>
            <b className='text-[#c23c23]'>More Exposure:</b> Artists get a
            platform to show their talent through social media, events, and
            collaborations — helping them reach a bigger audience and get
            noticed.
          </li>
          <li>
            <b className='text-[#c23c23]'>Creative Collaboration:</b> Artists
            can work with other singers, designers, photographers, and
            filmmakers to create exciting new projects together. It helps them
            learn from each other and explore new styles.
          </li>
          <li>
            <b className='text-[#c23c23]'>Professional Growth:</b> Kopou helps
            artists understand how the creative industry works — from branding
            to promotion — so they can build a strong professional image and
            career.
          </li>
          <li>
            <b className='text-[#c23c23]'>Networking & Connections:</b> Through
            Kopou, artists can meet people from different creative fields,
            brands, and event organizers — opening doors for future work and
            partnerships.
          </li>
          <li>
            <b className='text-[#c23c23]'>Earning Possibilities:</b> By joining
            campaigns, performances, and collaborations, artists can earn from
            their talent and get chances for sponsored or paid projects.
          </li>
          <li>
            <b className='text-[#c23c23]'>Supportive Community:</b> Kopou is
            like a creative family — artists support each other, share ideas,
            and grow together in a positive and inspiring environment.
          </li>
        </ul>
      </div>
      <img
        src={`https://res.cloudinary.com/dwkajs0ca/image/upload/v1759920322/KopouArtistsCollectionsIcon/k4i9fg8gbftcjjobw4fj.png`}
        className='lg:h-20 sm:h-16 h-10 absolute sm:top-5 top-3 sm:right-5 right-2 transform rotate-12 text-[#c23c23]'
      />
    </div>
  );
}
