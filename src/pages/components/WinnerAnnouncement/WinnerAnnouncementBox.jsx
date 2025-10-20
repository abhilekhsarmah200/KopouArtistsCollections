'use client';

import { useState, useCallback, useEffect } from 'react';
import Confetti from 'react-confetti';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function GiftBox({
  giftImage,
  altText = 'Surprise gift',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // ✅ Update confetti dimensions on resize
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // initial size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [isOpen]);

  const handleClickClose = useCallback(() => {
    if (isOpen && !showConfetti) setIsOpen(false);
  }, [isOpen, showConfetti]);

  return (
    <>
      <div id='winner' className='relative sm:px-8 px-4 z-10 h-full md:py-10'>
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={250}
            gravity={0.25}
            recycle={false}
            style={{ zIndex: 30, width: '90vw' }}
            colors={['#ff4b5c', '#ffe600', '#00e0ff', '#a020f0', '#00ff88']}
          />
        )}

        <div
          className={`relative z-20 flex flex-col items-center pt-20 ${className}`}
        >
          {/* Background glow */}
          <div className='absolute -z-10 w-72 h-72 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 blur-3xl opacity-30 rounded-full animate-pulse' />

          <div
            className='relative cursor-pointer group transition-transform duration-700'
            onClick={handleClick}
          >
            {!isOpen ? (
              // CLOSED GIFT BOX
              <div className='relative'>
                {/* Lid */}
                <div className='absolute z-20 -top-13 -left-1 md:-left-2 w-[20.5rem] group-hover:w-[38rem] group-hover:-left-5 md:w-[36rem] h-19 md:h-24 bg-gradient-to-br from-rose-400 via-red-500 to-red-700 rounded-t-xl border-t-2 border-red-800 shadow-xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:z-10 group-hover:rotate-7' />

                {/* Base Box */}
                <div className='w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] bg-gradient-to-br from-red-700 via-white/50 to-white rounded-b-xl border-2 border-red-900 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:shadow-[0_0_40px_10px_rgba(255,0,0,0.3)]'>
                  <img
                    src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760925999/KopouArtistsCollectionsIcon/Contests%20Winners/GiftBox1.webp'
                    alt='Gift Box Cover'
                    className='relative h-full w-full bg-white z-10'
                  />
                </div>

                {/* Sparkle effect on hover */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000'>
                  <div className='absolute top-4 left-6 w-5 h-5 bg-white rounded-full animate-ping' />
                  <div className='absolute bottom-6 right-6 w-5 h-5 bg-yellow-300 rounded-full animate-ping' />
                  <div className='absolute bottom-1/2 left-1/2 w-3 h-3 bg-yellow-300 rounded-full animate-ping' />
                  <div className='absolute bottom-10 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-ping' />
                  <div className='absolute top-10 right-6 w-3 h-3 bg-yellow-300 rounded-full animate-ping' />
                </div>
              </div>
            ) : (
              // OPENED GIFT BOX
              <div className='relative'>
                {/* Lid flips open */}
                <div className='absolute top-0 left-0 bg-gradient-to-br from-rose-400 via-red-500 to-red-700 rounded-t-xl border-t-2 border-red-800 shadow-xl animate-lid-open origin-bottom' />

                {/* Revealed Gift Image */}
                <div className='relative -top-[1rem] left-1/2 -translate-x-1/2 animate-reveal-image'>
                  <div className='relative w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white'>
                    <img
                      src={giftImage}
                      alt={altText}
                      fill
                      className='object-cover bg-white'
                      priority
                    />
                    <div
                      onClick={handleClickClose}
                      className='absolute top-0 right-0'
                    >
                      <X className='p-1 border rounded-full border-[#c23c23] text-[#c23c23] hover:bg-[#c23c23] hover:text-white h-8 w-8' />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
