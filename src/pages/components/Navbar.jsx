'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    {
      id: 'kopouconnect',
      label: 'Kopou Connect',
      href: '/kopouconnect',
      isExternal: true,
    },
    {
      id: 'activities',
      label: 'Activities',
      href: '/activities',
      isExternal: true,
    },
    {
      id: 'contests',
      label: 'Contests',
      href: '/ourcontest',
      isExternal: true,
    },
    { id: 'about', label: 'About Us', href: '#about' },
    {
      id: 'contact',
      label: 'Contact Us',
      href: '/contactus',
      isExternal: true,
    },
  ];

  // Smooth scroll
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  // ✅ Set active link based on route
  useEffect(() => {
    if (pathname === '/ourcontest') {
      setActiveLink('Contests');
    } else if (pathname === '/contactus') {
      setActiveLink('Contact Us');
    }
  }, [pathname]);

  const handleLinkClick = async (link) => {
    setMenuOpen(false);

    if (link.isExternal) {
      setActiveLink(link.label);
      router.push(link.href);
    } else {
      // When clicking in-page sections
      setActiveLink(link.label);

      // If not on home, go to home first
      if (pathname !== '/') {
        await router.push(`/${link.href}`);
      } else {
        // Scroll to the section
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });

          // ✅ Update URL hash without reloading
          window.history.replaceState(null, '', link.href);
        }
      }
    }
  };

  const getLinkClasses = (isActive, isMobile = false) => {
    const baseClasses = isMobile
      ? 'block rounded-md px-2 py-2 text-base font-[600] transition-all duration-200 ease-in-out cursor-pointer'
      : 'rounded-md md:px-2 px-2 py-2 text-sm font-[600] transition-all duration-200 ease-in-out cursor-pointer';

    if (isActive) {
      return `${baseClasses} bg-[#c23c23] text-white shadow-sm shadow-gray-600/25`;
    } else {
      return `${baseClasses} w-full sm:w-auto text-left text-[#c23c23] hover:bg-white/10 hover:text-[#c23c23]/50`;
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <nav className='relative bg-[#faf5ef] shadow-2xl backdrop-blur-sm after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10'>
        <div className='mx-auto max-w-7xl 2xl:max-w-[90%] px-2 sm:px-6 lg:px-8'>
          <div className='relative flex sm:h-[6rem] h-[5rem] items-center justify-between'>
            {/* Mobile menu button */}
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden z-20'>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type='button'
                className='relative cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-[#c23c23] hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[#c23c23] transition-colors duration-200'
              >
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

            {/* Logo */}
            <div className='flex flex-1 items-center justify-center sm:items-center sm:justify-start'>
              <a href='/'>
                <img
                  loading='lazy'
                  src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760073679/KopouArtistsCollectionsIcon/Webp/icon2.webp'
                  alt='Kopou Artist Collective logo'
                  className='cursor-pointer h-10 w-auto sm:h-12'
                />
              </a>

              {/* Desktop Links */}
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex lg:space-x-4 montserrat-text'>
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className={`${getLinkClasses(
                        activeLink === link.label
                      )} md:text-[1rem] text-[0.7rem]`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className='sm:hidden absolute top-full left-0 right-0 z-10 bg-white/90 shadow-2xl backdrop-blur-sm px-2 pt-2 pb-3 space-y-1 border-t border-white/10 montserrat-text'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={getLinkClasses(activeLink === link.label, true)}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
