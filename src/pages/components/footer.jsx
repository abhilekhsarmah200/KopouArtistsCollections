import React from 'react';
import { Facebook, Instagram, X, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className={`bg-[#faf5ef] text-gray-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] py-10`}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Section */}
          <div>
            <img
              src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760073679/KopouArtistsCollectionsIcon/Webp/icon2.webp'
              className='h-[5rem]'
              alt=''
            />
            <p className='mt-3 text-sm text-[#c23c23]/50'>
              Bringing creativity and innovation together. Follow us for updates
              and inspiration.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className='flex flex-col space-y-2 text-sm'>
            <a
              href='#'
              className='hover:text-[#c23c23]/50 text-[#c23c23] transition'
            >
              About Us
            </a>
            <a
              href='#'
              className='hover:text-[#c23c23]/50 text-[#c23c23] transition'
            >
              Vision & Mission
            </a>
            <a
              href='#'
              className='hover:text-[#c23c23]/50 text-[#c23c23] transition'
            >
              Future Goals
            </a>
            <a
              href='#'
              className='hover:text-[#c23c23]/50 text-[#c23c23] transition'
            >
              Benefits for Artists
            </a>
          </div>

          {/* Right Section - Social Icons */}
          <div>
            <h3 className='text-[#c23c23] font-semibold mb-3'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-[#c23c23] rounded-full hover:bg-blue-600 transition'
              >
                <Facebook />
              </a>
              <a
                href='https://www.instagram.com/kopouforartists/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-[#c23c23] rounded-full hover:bg-pink-600 transition'
              >
                <Instagram />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-[#c23c23] rounded-full hover:bg-black transition'
              >
                <X />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-[#c23c23] rounded-full hover:bg-blue-500 transition'
              >
                <Linkedin />
              </a>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-[#c23c23] rounded-full hover:bg-red-600 transition'
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className='mt-8 border-t border-[#c23c23] pt-5 text-center text-sm text-[#c23c23] font-bold'>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
