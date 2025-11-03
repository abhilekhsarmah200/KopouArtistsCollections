'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import VideoCarousel from './VideoCarousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Jahnu Priyam',
    img: 'https://res.cloudinary.com/dwkajs0ca/image/upload/v1762172554/KopouArtistsCollectionsIcon/KopouTeam/j28jn9wwcqlrgywdfi9c.webp',
    shortContent: `Somewhere between sleepless nights and endless melodies, there’s a boy named Jahnu Priyam, still chasing the sound of his own dream. He’s not backed by fame or fortune — just faith, courage, and a voice that refuses...`,
    fullContent: `Somewhere between sleepless nights and endless melodies, there’s a boy named Jahnu Priyam, still chasing the sound of his own dream. He’s not backed by fame or fortune — just faith, courage, and a voice that refuses to stay silent. 🎤
Every song he sings carries a piece of his struggle, every lyric a story untold. The journey isn’t easy, but he’s walking it with heart — one note, one performance, one hope at a time.
Because some dreams don’t need shortcuts — they just need truth. 🌙`,
    videos: [
      'https://www.youtube.com/embed/WYK7h_-oHSA?si=fydmnINY8uRd-wxG',
      'https://www.youtube.com/embed/NEQKt90v67A?si=32vukibyTYfJS9lu',
      'https://www.youtube.com/embed/oh-XABAMk3w?si=qDIUPVEOen3wkwTR',
      'https://www.youtube.com/embed/O04khPU1H7s?si=mxGx5U3uSZTrVeB6',
    ],
  },
  // {
  //   id: 2,
  //   title: 'Dance',
  //   img: '/images/dance.jpg',
  //   videos: [
  //     'https://www.youtube.com/embed/WYK7h_-oHSA?si=fydmnINY8uRd-wxG',
  //     'https://www.youtube.com/embed/oh-XABAMk3w?si=qDIUPVEOen3wkwTR',
  //   ],
  // },
  // {
  //   id: 3,
  //   title: 'Singing',
  //   img: '/images/singing.jpg',
  //   videos: [
  //     'https://www.youtube.com/embed/tAGnKpE4NCI',
  //     'https://www.youtube.com/embed/fRh_vgS2dFE',
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'Art',
  //   img: '/images/art.jpg',
  //   videos: ['https://www.youtube.com/embed/1G4isv_Fylg'],
  // },
];

export default function MainCarousel() {
  const [selectedItem, setSelectedItem] = useState(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full flex flex-col items-center relative'>
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='w-full max-w-6xl relative'
        >
          {items.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className='cursor-pointer group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 bg-white'>
                <img
                  src={item?.img}
                  alt={item?.title}
                  className='w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='p-4 text-center'>
                  <h3 className='text-lg md:text-xl uppercase poppins-text text-gray-800 group-hover:text-[#c23c23]'>
                    {item?.title}
                  </h3>
                </div>
                <div className='px-4 text-left'>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-full' : 'max-h-96 overflow-hidden'
                    }`}
                  >
                    <p className='text-[1rem] montserrat-text'>
                      {isExpanded ? item?.fullContent : item?.shortContent}
                    </p>
                    <button
                      onClick={toggleReadMore}
                      className='float-end block px-6 py-2 text-[#c23c23] cursor-pointer transition-colors duration-300 font-semibold text-sm md:text-base transform hover:scale-105'
                    >
                      {isExpanded ? '▲ Read Less' : '▼ Read More'}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(item)}
                  className='float-right z-10 mx-4 mb-4 text-sm transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center md:gap-2 bg-white border border-[#c23c23] hover:border-[#c23c23]/70 text-[#c23c23] hover:text-[#c23c23]/70 p-2 rounded-lg'
                >
                  See Resources
                </button>
              </div>
            </SwiperSlide>
          ))}
          <button className='custom-prev absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-[#c23c23] hover:text-white text-[#c23c23] rounded-full p-2 shadow-md transition-all duration-300'>
            <ChevronLeft size={22} />
          </button>
          <button className='custom-next absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-[#c23c23] hover:text-white text-[#c23c23] rounded-full p-2 shadow-md transition-all duration-300'>
            <ChevronRight size={22} />
          </button>
        </Swiper>

        {/* Custom Modern Navigation Buttons */}
      </>
      {selectedItem && (
        <VideoCarousel
          videos={selectedItem?.videos}
          title={selectedItem?.title}
          onBack={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
