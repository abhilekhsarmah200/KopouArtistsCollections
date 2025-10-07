import React from 'react';
import { Facebook, Instagram, X, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 py-10 mt-10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Section */}
          <div>
            <h2 className='text-xl font-semibold text-white'>Your Company</h2>
            <p className='mt-3 text-sm text-gray-400'>
              Bringing creativity and innovation together. Follow us for updates
              and inspiration.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className='flex flex-col space-y-2 text-sm'>
            <a href='#' className='hover:text-white transition'>
              About Us
            </a>
            <a href='#' className='hover:text-white transition'>
              Vision & Mission
            </a>
            <a href='#' className='hover:text-white transition'>
              Future Goals
            </a>
            <a href='#' className='hover:text-white transition'>
              Benefits for Artists
            </a>
          </div>

          {/* Right Section - Social Icons */}
          <div>
            <h3 className='text-white font-semibold mb-3'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition'
              >
                <Facebook />
              </a>
              <a
                href='https://www.instagram.com/kopouforartists/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition'
              >
                <Instagram />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-black transition'
              >
                <X />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition'
              >
                <Linkedin />
              </a>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-red-600 transition'
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className='mt-8 border-t border-gray-700 pt-5 text-center text-sm text-gray-400'>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
