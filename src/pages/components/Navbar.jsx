import { User } from 'lucide-react';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { id: 'home', label: 'Home', sectionId: 'home' },
    // { id: 'vision', label: 'Vision & Mission', sectionId: 'vision-mission' },
    { id: 'benefits', label: 'Benefits for Artists', sectionId: 'benefits' },
    { id: 'goals', label: 'Future Goals', sectionId: 'future-goals' },
    { id: 'about', label: 'About Us', sectionId: 'about' },
    {
      id: 'contests',
      label: 'Our Contests',
      sectionId: 'winner',
      isExternalPage: true,
    },
  ];

  const handleLinkClick = (linkLabel, sectionId, isExternalPage = false) => {
    setActiveLink(linkLabel);
    setMenuOpen(false);

    // Check if user is currently on Our Contests page
    const isOnContestsPage = pathname === '/ourcontest';

    if (isExternalPage) {
      // Redirect to Our Contests page
      router.push('/ourcontest');
    } else if (isOnContestsPage) {
      // If user is on Our Contests page and clicks any other tab,
      // navigate back to home page with sectionId as query parameter
      router.push(`/#${sectionId}`);
    } else {
      // User is already on home page, just scroll to section
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
    }
  };

  const getLinkClasses = (isActive, isMobile = false) => {
    const baseClasses = isMobile
      ? 'block rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ease-in-out cursor-pointer'
      : 'rounded-md md:px-3 px-2 py-2 text-sm md:font-medium transition-all duration-200 ease-in-out cursor-pointer';

    if (isActive) {
      return `${baseClasses} bg-[#c23c23] text-white shadow-lg shadow-gray-600/25`;
    } else {
      return `${baseClasses} w-full sm:w-auto text-left text-[#c23c23] hover:bg-white/10 hover:text-[#c23c23]/50`;
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <nav className='relative bg-transparent backdrop-blur-sm after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex sm:h-[6rem] h-[5rem] items-center justify-between'>
            {/* Mobile menu button */}
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden z-20'>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type='button'
                className='relative cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-[#c23c23] hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[#c23c23] transition-colors duration-200'
                aria-expanded={menuOpen}
              >
                <span className='sr-only'>Open main menu</span>
                {!menuOpen ? (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo and main links */}
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex shrink-0 items-center'>
                <a href='/'>
                  <img
                    loading='lazy'
                    src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760073679/KopouArtistsCollectionsIcon/Webp/icon2.webp'
                    alt='Kopou Artist Collective logo'
                    title='Kopou Artist Collective logo'
                    className='cursor-pointer h-10 w-auto sm:h-12'
                  />
                </a>
              </div>

              {/* Desktop links */}
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex lg:space-x-4'>
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      className={`${getLinkClasses(
                        activeLink === link.label
                      )} md:text-[1rem] text-[0.7rem]`}
                      onClick={() =>
                        handleLinkClick(
                          link.label,
                          link.sectionId,
                          link.isExternalPage
                        )
                      }
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right-side user profile */}
            {/* <div className='absolute inset-y-0 right-0 flex gap-2 items-center pr-2 sm:static sm:ml-6 sm:pr-0 z-20'>
              <button
                type='button'
                className='relative rounded-full p-1 text-[#c23c23] hover:text-[#c23c23]/50 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 cursor-pointer transition-colors duration-200'
              >
                <span className='sr-only'>View notifications</span>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
                  />
                </svg>
              </button>
              <img
              loading="lazy"
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
                alt='User avatar'
                className='size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10 ml-3'
              />
              <User className='h-8 w-8 rounded-full border p-[0.4rem] text-[#c23c23] hover:text-[#c23c23]/50 cursor-pointer' />
            </div> */}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className='sm:hidden absolute top-full left-0 right-0 z-10 bg-white/90 shadow-2xl backdrop-blur-sm px-2 pt-2 pb-3 space-y-1 border-t border-white/10'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={getLinkClasses(activeLink === link.label, true)}
                onClick={() =>
                  handleLinkClick(
                    link.label,
                    link.sectionId,
                    link.isExternalPage
                  )
                }
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
