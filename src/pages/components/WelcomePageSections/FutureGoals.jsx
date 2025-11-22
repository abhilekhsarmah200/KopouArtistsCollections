import React from 'react';
import futureGoals from '../../../data/futureGoals.data';
import Carousel from '../Carousel/Carousel';

export default function FutureGoals() {
  return (
    <div
      id='future-goals'
      className='relative sm:px-8 px-4 z-10 h-full py-4 md:py-10'
    >
      <div className='absolute inset-0 bg-cover sm:bg-contain bgimage bg-[#faf5ef] opacity-50'></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h2
          className='flex sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Future Goals
        </h2>
        <div className='max-w-2xl lg:max-w-4xl xl:max-w-6xl 4xl:max-w-[100%] hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5'>
          {futureGoals.map((data, index) => (
            <div
              key={index}
              className='lg:max-w-xl max-w-sm bg-white border border-[gray]/30 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
            >
              <div className='relative text-left md:h-full p-6 sm:p-10'>
                <h2 className='text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] font-bold text-[#c23c23] poppins-text'>
                  {data?.title}
                </h2>
                <div className='montserrat-text text-sm md:text-[1rem] lg:text-xl'>
                  {data?.content}
                  {data?.points?.map((item, index) => (
                    <li
                      key={index}
                      className='text-[7rem] md:text-[0.8rem] lg:text-[1rem]'
                    >
                      <i>{item}</i>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='md:hidden'>
        <Carousel data={futureGoals} component={'bulletin'} />
      </div>
    </div>
  );
}
