import React from 'react';
import ContactUsForm from '../contactUsForm/ContactUsForm';

export default function ContactUs() {
  return (
    <div
      id='contactus'
      className='relative sm:px-8 px-4 z-10 h-full py-4 md:py-10'
    >
      <div className="absolute inset-0 bg-contain sm:bg-contain bgimage bg-[#faf5ef] sm:bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1760016472/KopouArtistsCollectionsIcon/Webp/Banner3.webp')] opacity-50"></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h2
          className='flex gap-1 sm:gap-3 items-center text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 poppins-text
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Connect With Us
        </h2>
        <div className='max-w-2xl lg:max-w-4xl xl:max-w-6xl 4xl:max-w-[100%] flex lg:flex-row flex-col bg-white rounded-lg shadow-md mt-5'>
          <div className='w-full p-6 pb-0 lg:pb-6 flex flex-col gap-2 justify-center'>
            <h2 className='text-left md:px-4 text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] text-[#c23c23] font-bold poppins-text'>
              Contact Form
            </h2>
            <p className='text-left montserrat-text text-sm md:text-[1rem] lg:text-xl md:px-4'>
              Connect with Kopou Artists Collection – Your questions, feedback,
              and artistic inquiries are always welcome. Reach out to us and
              let's create something beautiful together...
            </p>
          </div>
          <div className='w-full'>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
