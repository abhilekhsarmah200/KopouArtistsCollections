'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BookingModal from './BookingModal';
import { TicketCheck } from 'lucide-react';

export default function BannerCarousel() {
  const [open, setOpen] = useState(false);

  const banners = [
    'https://res.cloudinary.com/dwkajs0ca/image/upload/v1767946874/KopouArtistsCollectionsIcon/Webp/tuepnfzcdhctbriq7vgr.webp',
    'https://res.cloudinary.com/dwkajs0ca/image/upload/v1767946874/KopouArtistsCollectionsIcon/Webp/iqtwtfu3ykhuwrywrctp.webp',
  ];

  return (
    <div className='relative w-full overflow-hidden'>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className='w-full h-[85vh] rounded-4xl'
      >
        {banners.map((img, i) => (
          <SwiperSlide key={i}>
            <div className='relative w-full h-full'>
              {/* Background image */}
              <img
                src={img}
                alt='Concert Banner'
                className='absolute inset-0 w-full h-full object-cover'
              />

              {/* Dark overlay */}
              <div className='absolute inset-0 bg-black/50' />

              {/* Content */}
              <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
                <h1 className='text-white/80 text-3xl sm:text-5xl font-bold mb-2'>
                  Seedhe Maut Live Concert
                </h1>

                <button
                  onClick={() => setOpen(true)}
                  className='px-6 mt-2 flex gap-2 items-center animate-pulse cursor-pointer sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white rounded-full text-base sm:text-lg font-semibold transition'
                >
                  Grab Your Ticket!
                  <TicketCheck />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {open && <BookingModal close={() => setOpen(false)} />}
    </div>
  );
}
