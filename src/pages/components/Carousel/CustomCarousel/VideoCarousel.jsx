'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function VideoCarousel({ videos, title, onBack }) {
  return (
    <div className='w-full flex flex-col items-center relative'>
      {/* Back Button */}
      <button
        onClick={onBack}
        className='self-end mt-[2rem] cursor-pointer ml-4 mb-4 px-4 py-2 bg-[#c23c23] text-white rounded-lg hover:bg-[#a12f1d] transition-all'
      >
        <X />
      </button>

      {/* Title */}
      <h2 className='text-2xl md:text-3xl font-semibold text-center mb-6 text-[#c23c23]'>
        {title} Videos
      </h2>

      {/* Video Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          nextEl: '.video-next',
          prevEl: '.video-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className='w-full max-w-6xl'
      >
        {videos.map((url, index) => (
          <SwiperSlide key={index}>
            <div className='rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white'>
              <iframe
                width='100%'
                height='250'
                src={url}
                title={`YouTube video ${index + 1}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='w-full h-[220px] sm:h-[280px] md:h-[300px]'
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='video-prev absolute cursor-pointer left-2 sm:left-6 top-[70%] -translate-y-1/2 z-10 bg-white/80 hover:bg-[#c23c23] hover:text-white text-[#c23c23] rounded-full p-2 shadow-md transition-all duration-300'>
        <ChevronLeft size={22} />
      </button>
      <button className='video-next absolute cursor-pointer right-2 sm:right-6 top-[70%] -translate-y-1/2 z-10 bg-white/80 hover:bg-[#c23c23] hover:text-white text-[#c23c23] rounded-full p-2 shadow-md transition-all duration-300'>
        <ChevronRight size={22} />
      </button>

      {/* Custom Modern Navigation Buttons */}
    </div>
  );
}
