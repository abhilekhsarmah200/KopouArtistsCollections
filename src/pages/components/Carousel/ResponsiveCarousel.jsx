'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ResponsiveCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const items = [
    {
      id: 1,
      title: 'Gauranga Gogoi',
      alt: 'Website Launch Giveaway Winner',
      img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1760872446/KopouArtistsCollectionsIcon/Contests%20Winners/1stWinner.webp',
    },
    // { id: 2, title: 'Item 2', img: 'https://placehold.co/400x250' },
    // { id: 3, title: 'Item 3', img: 'https://placehold.co/400x250' },
    // { id: 4, title: 'Item 4', img: 'https://placehold.co/400x250' },
    // { id: 5, title: 'Item 5', img: 'https://placehold.co/400x250' },
  ];

  // ✅ Connect navigation after component mount
  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className='relative w-full px-6 py-3 md:py-10 group'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        onSwiper={setSwiperInstance} // store swiper instance
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className='rounded-xl'
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='bg-white shadow-sm rounded-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300'>
              <img
                src={item?.img}
                alt={item?.alt}
                title={`${item?.title} - ${item?.alt}`}
                className='w-full md:h-[30rem] h-[23rem]'
              />
              <div className='poppins-text px-4 pt-4 text-center font-bold capitalize text-[#c23c23] text-[1.2rem] md:text-[1.5rem] lg:text-3xl'>
                {item?.title}
              </div>
              <p className='montserrat-text text-sm md:text-[1rem] lg:text-xl px-2 pb-4 text-center font-sans'>
                {item?.alt}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className='absolute cursor-pointer top-1/2 left-3 -translate-y-1/2 z-[60] bg-white/90 backdrop-blur-sm border border-gray-300 p-4 rounded-full shadow-sm text-gray-800 hover:bg-[#c23c23] hover:text-white transition duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>

      <button
        ref={nextRef}
        className='absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 z-[60] bg-white/90 backdrop-blur-sm border border-gray-300 p-4 rounded-full shadow-sm text-gray-800 hover:bg-[#c23c23] hover:text-white transition duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100'
      >
        <ChevronRight className='w-6 h-6' />
      </button>
    </div>
  );
};

export default ResponsiveCarousel;
