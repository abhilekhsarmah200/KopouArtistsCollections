import React from 'react';
import { Facebook, Instagram, X, Linkedin, Youtube } from 'lucide-react';
import GovtRegistrationBadge from './GovtRegistrate/GovtRegistrationBadge';

export default function Footer() {
  const navLinks = [
    { id: 'home', label: 'Home', sectionId: 'home' },
    { id: 'vision', label: 'Vision & Mission', sectionId: 'vision-mission' },
    { id: 'benefits', label: 'Benefits for Artists', sectionId: 'benefits' },
    { id: 'goals', label: 'Future Goals', sectionId: 'future-goals' },
    { id: 'about', label: 'About Us', sectionId: 'about' },
  ];

  const handleLinkClick = (linkLabel, sectionId) => {
    // Smooth scroll to section with offset for fixed navbar
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Adjust this value based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <footer
      className={`bg-[#faf5ef] text-gray-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] py-10`}
    >
      <div className='max-w-7xl 2xl:max-w-[90%] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Section */}
          <div>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760073679/KopouArtistsCollectionsIcon/Webp/icon2.webp'
              className='h-[5rem]'
              alt='Kopou Artist Collective icon'
            />
            <p className='mt-3 text-sm text-[#c23c23]/50 montserrat-text'>
              Bringing creativity and innovation together. Follow us for updates
              and inspiration.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className='flex flex-col space-y-2 text-sm montserrat-text'>
            {navLinks.map((link) => (
              <a
                key={link?.id}
                href={`#${link?.sectionId}`}
                className='hover:text-[#c23c23]/50 text-[#c23c23] transition cursor-pointer'
              >
                {link?.label}
              </a>
            ))}
            {/* <a
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
            </a> */}
          </div>

          {/* Right Section - Social Icons */}
          <div>
            <h3 className='text-[#c23c23] font-semibold mb-3 montserrat-text'>
              Follow Us
            </h3>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/people/Kopou-Collectives/61582127994862/'
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
              {/* <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-[#c23c23] rounded-full hover:bg-black transition'
              >
                <X />
              </a> */}
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-[#c23c23] rounded-full hover:bg-[#0a66c2] transition'
              >
                <Linkedin />
              </a>
              <a
                href='https://youtube.com/@kopouartistcollective/'
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
        <div className='container mx-auto flex flex-col gap-2 items-center justify-center mt-8 border-t w-full montserrat-text border-[#c23c23] pt-5 text-center'>
          <div className='text-sm text-[#c23c23] font-bold'>
            © {new Date().getFullYear()} Kopou Artist Collective. All rights
            reserved by{' '}
            <a
              target='_blank'
              href='https://in.bold.pro/my/abhilekh-sarmah01'
              className='font-extrabold underline'
            >
              Abhilekh Sarmah
            </a>
            .
          </div>
          <GovtRegistrationBadge />
        </div>
      </div>
    </footer>
  );
}
