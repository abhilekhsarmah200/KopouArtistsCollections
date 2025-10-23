'use client';

import { useState, useEffect } from 'react';
import GiftBox from '../WinnerAnnouncement/WinnerAnnouncementBox';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const now = new Date();
    const target = new Date();

    // Set countdown to 1:30 PM today
    target.setHours(13, 30, 0, 0);

    if (now > target) {
      setIsFinished(true);
      return;
    }

    const timer = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(timer);
        setIsFinished(true);
        setTimeLeft('00:00:00');
        return;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    });

    return () => clearInterval(timer);
  }, []);

  // Smooth transition after countdown finishes
  useEffect(() => {
    if (isFinished) {
      const timer = setTimeout(() => {
        setShowGift(true);
      }, 1000); // 1 second delay before showing gift
      return () => clearTimeout(timer);
    }
  }, [isFinished]);

  return (
    <div className='relative z-20 flex flex-col items-center justify-center text-center py-8 transition-all duration-700 ease-in-out'>
      {!isFinished ? (
        <>
          <div className='lg:max-w-xl z-5 sm:max-w-lg max-w-sm bg-white md:bg-transparent rounded-xl shadow-sm md:shadow-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
            <div className='relative md:h-full p-6 sm:p-10'>
              <h2 className='ext-base md:text-lg lg:text-xl text-center px-[3rem] font-semibold text-[black] poppins-text'>
                ⏰ Countdown to <b className='text-[#c23c23]'>1:30 PM!</b> Our
                first <b className='text-[#c23c23]'>winner announcement</b> is
                coming soon… and yes, it could be{' '}
                <b className='text-[#c23c23]'>YOU! 😍</b>
              </h2>
              <p className='text-4xl font-bold mt-4 text-[#c23c23] animate-pulse'>
                {timeLeft}
              </p>
            </div>
          </div>
        </>
      ) : !showGift ? (
        <div className='text-3xl font-bold text-green-600 animate-fade-out'>
          🎉 Let’s Open the Box!
        </div>
      ) : (
        <div className='animate-fade-in'>
          <GiftBox
            giftImage='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760872446/KopouArtistsCollectionsIcon/Contests%20Winners/1stWinner.webp'
            altText='Amazing Surprise!'
            className='mb-8'
          />
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
