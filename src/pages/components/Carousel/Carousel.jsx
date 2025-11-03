import React, { useState } from 'react';

export default function Carousel({ data, component }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data?.length) % data?.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='w-full px-3 sm:px-4 md:px-6 lg:px-8'>
      {/* Carousel Container */}
      <div className='relative w-full mx-auto max-w-[90vw] sm:max-w-lg md:max-w-2xl lg:max-w-3xl'>
        {/* Carousel Slides */}
        <div
          className={`overflow-hidden rounded-xl border border-gray-300 ${
            component === 'bulletin' ? 'h-auto py-6 sm:py-10' : 'bg-white'
          } backdrop-blur-sm shadow-sm`}
        >
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {data?.map((quote, index) => (
              <div
                key={quote?.id || index}
                className={`w-full flex-shrink-0 px-4 sm:px-6 md:px-10 py-6 sm:py-10 ${
                  quote?.title ? '' : 'md:py-16'
                }`}
              >
                <div className='max-w-3xl mx-auto text-center'>
                  {/* Image */}
                  {quote?.img && (
                    <div className='flex justify-center mb-4 sm:mb-6'>
                      <div className='relative rounded-full border border-white shadow-lg overflow-hidden h-[6rem] w-[6rem] sm:h-[8rem] sm:w-[8rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem]'>
                        <img
                          loading='lazy'
                          src={quote?.img}
                          alt={quote?.author}
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  {quote?.title && (
                    <p className='poppins-text font-bold text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-3xl text-[#c23c23] mb-3'>
                      {quote?.title}
                    </p>
                  )}

                  {/* Quote Text */}
                  <p className='montserrat-text text-gray-800 font-light text-[0.9rem] sm:text-[1rem] md:text-lg leading-relaxed px-1 sm:px-2 mb-4 sm:mb-6'>
                    {quote?.text || quote?.content}
                  </p>

                  {/* Author */}
                  <div
                    className={`${
                      quote?.title ? 'border-0' : 'border-t border-gray-300'
                    } pt-4 sm:pt-6`}
                  >
                    <p className='poppins-text text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] font-bold text-[#c23c23]'>
                      {quote?.author}
                    </p>
                    {quote?.position && (
                      <p className='montserrat-text text-gray-600 text-[0.9rem] sm:text-[1rem] md:text-lg mt-1'>
                        {quote?.position}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className='absolute cursor-pointer left-1 sm:left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#c23c23] rounded-full shadow-lg border border-gray-300 transition-all duration-200 hover:scale-110 p-1 sm:p-2 md:p-3'
          aria-label='Previous slide'
        >
          <svg
            className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className='absolute cursor-pointer right-1 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#c23c23] rounded-full shadow-lg border border-gray-300 transition-all duration-200 hover:scale-110 p-1 sm:p-2 md:p-3'
          aria-label='Next slide'
        >
          <svg
            className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        {component !== 'bulletin' && (
          <div className='flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3'>
            {data?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 cursor-pointer sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#c23c23] scale-125'
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
