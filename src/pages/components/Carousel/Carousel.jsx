import React, { useState, useEffect } from 'react';

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

  // Auto-rotate slides every 5 seconds, except for bulletin
  useEffect(() => {
    // Only set up auto-rotate if component is NOT 'bulletin'
    if (component !== 'bulletin') {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [component]); // Add component to dependency array

  return (
    <div>
      {/* Carousel Container */}
      <div className='relative w-full mx-auto max-w-lg md:max-w-2xl lg:max-w-xl sm:max-w-lg'>
        {/* Carousel Slides */}
        <div
          className={`overflow-hidden rounded-2xl bg-white backdrop-blur-sm shadow-2xl`}
        >
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {data?.map((quote, index) => (
              <div
                key={quote?.id}
                className={`w-full flex-shrink-0 ${
                  quote?.title ? 'px-6 py-6' : 'px-6 py-10 md:px-16 md:py-20'
                }`}
              >
                <div className='max-w-3xl mx-auto'>
                  {/* Quote Icon */}

                  {quote?.img && (
                    <div className='text-6xl text-center text-[#c23c23] mb-6'>
                      <img
                        loading='lazy'
                        src={quote?.img}
                        className='lg:h-[16rem] lg:w-[16rem] sm:h-[12rem] sm:w-[12rem] h-[8rem] w-[8rem] mx-auto rounded-full border border-white shadow-neutral-400 shadow-2xl'
                        alt={quote?.author}
                      />
                    </div>
                  )}
                  {quote?.title && (
                    <p className='px-2 text-[1rem] md:text-[1.2rem] lg:text-3xl font-semibold text-[#c23c23]'>
                      {quote?.title}
                    </p>
                  )}
                  {/* Quote Text */}
                  <p
                    className={`text-sm md:text-xl lg:text-2xl text-gray-800 font-light ${
                      quote?.content ? 'mb-0 px-2' : 'mb-8'
                    }`}
                  >
                    {quote?.text || quote?.content}
                  </p>

                  {/* Author */}
                  <div
                    className={`${
                      quote?.title ? 'Border-0' : 'border-t'
                    } "border-gray-300 pt-6"`}
                  >
                    <p className='text-[1rem] md:text-[1.2rem] lg:text-3xl font-semibold text-[#c23c23]'>
                      {quote?.author}
                    </p>
                    <p className='text-sm md:text-xl lg:text-2xl text-gray-600 mt-1'>
                      {quote?.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`${
            component === 'bulletin' ? 'block p-1' : 'block p-2 md:p-3'
          }  cursor-pointer absolute left-2 top-1/2 md:left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#c23c23] rounded-full shadow-lg transition-all duration-200 hover:scale-110`}
          aria-label='Previous quote'
        >
          <svg
            className='w-6 h-6 md:w-8 md:h-8'
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
          className={`${
            component === 'bulletin' ? 'block p-1' : 'block p-2 md:p-3'
          } cursor-pointer absolute right-2 top-1/2 md:right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#c23c23] rounded-full shadow-lg transition-all duration-200 hover:scale-110`}
          aria-label='Next quote'
        >
          <svg
            className='w-6 h-6 md:w-8 md:h-8'
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
          <div className='flex justify-center mt-8 space-x-3'>
            {data?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
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
